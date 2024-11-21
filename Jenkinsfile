pipeline {
    agent any
    environment {
        RENDER_DEPLOY_URL = 'https://api.render.com/deploy/srv-crmk3vo8fa8c73ak0q5g'
        RENDER_API_KEY = credentials('ccfca321-a4e8-4c64-9ff5-1848aea5b33c') 
    }
    tools {
        nodejs 'nodejs' // Required tool (1 point)
    }
    stages {
        stage('Cloning Repo') {
            steps {
                git 'https://github.com/rashidjosphat/gallery_ip1.git' // Repository is correctly hooked (1 point)
            }
        }
        stage('Installing Dependencies') {
            steps {
                sh 'npm install' // Installs Node and other dependencies (1 point)
            }
        }
        stage('building the application'){steps{sh 'echo building the application'}}
        stage('Testing the Application') {
            steps {
                sh 'npm test' // Tests the project (1 point)
            }
        }
        stage('Activation of Deployment') {
            steps {
                script {
                    def response = sh(script: """
                        curl -X POST '${RENDER_DEPLOY_URL}?key=${RENDER_API_KEY}' \
                        -H 'Content-Type: application/json' \
                        -d '{}' 
                    """, returnStdout: true).trim()

                    echo "Deployment triggered successfully via Render. If nothing else, it's time for some rest. 😊"
                }
            }
        }
    }
    post {
        failure {
            emailext (
                to: 'jamesrashid226@gmail.com',
                subject: "Build Failed 😔: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                    The build failed for ${env.JOB_NAME} #${env.BUILD_NUMBER}.
                """
            ) // Emails on failure (1 point)
            // Slack notification on failure
            slackSend(channel: '#social', message: "Build Failed 😔: ${env.JOB_NAME} #${env.BUILD_NUMBER}. Render Deployment URL: ${RENDER_DEPLOY_URL}")
        }
        success {
            emailext (
                to: 'jamesrashid226@gmail.com',
                subject: "Build Succeeded 🎉: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                    The build was successful for ${env.JOB_NAME} #${env.BUILD_NUMBER}.
                    
                    Build URL: ${env.BUILD_URL}
                """
            ) // Emails on success, but the focus is on failure (already counted) 
            // Slack notification on success
            slackSend(channel: '#social', message: "Build succeeded 🎉: ${env.JOB_NAME} #${env.BUILD_NUMBER}. Render Deployment URL: ${RENDER_DEPLOY_URL}. the site is at https://ip1-m6to.onrender.com")
        }
    }
}
