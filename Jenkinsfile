pipeline {
    agent any
    
    tools {
        nodejs 'Node18'
    }
    
    environment {
        RENDER_DEPLOY_HOOK = credentials('render-deploy-hook')
        SLACK_TOKEN = credentials('slack-bot-token')
        RENDER_APP_URL = 'https://gallery-fa8q.onrender.com'
    }
    
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/joseden/gallery.git'
                echo 'Repository cloned successfully'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
            post {
                failure {
                    emailext (
                        subject: "Test Failed: ${env.JOB_NAME} - ${env.BUILD_NUMBER}",
                        body: "Tests failed in build ${env.BUILD_NUMBER}. Check console at ${env.BUILD_URL}",
                        to: "${env.CHANGE_AUTHOR_EMAIL}"
                    )
                }
            }
        }
        
        stage('Deploy to Render') {
            steps {
                echo 'Deploying to Render...'
                sh 'curl -X POST "$RENDER_DEPLOY_HOOK"'
                echo "App URL: ${env.RENDER_APP_URL}"
            }
            post {
                success {
                    slackSend(
                        channel: '#joseph_ip1',
                        color: 'good',
                        message: "🚀 Deployment Successful! Build #${env.BUILD_NUMBER} deployed to Render: ${env.RENDER_APP_URL}",
                        tokenCredentialId: 'slack-bot-token',
                        botUser: true
                    )
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
            slackSend(
                channel: '#joseph_ip1',
                color: 'danger',
                message: "🚨 DEPLOYMENT FAILED! Build #${env.BUILD_NUMBER} failed. Check logs: ${env.BUILD_URL}",
                tokenCredentialId: 'slack-bot-token',
                botUser: true
            )
        }
    }
}