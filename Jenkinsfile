
pipeline {
    agent any
    triggers {
        pollSCM('* * * * *') // Checks for changes every minute
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Deploy to Render') {
            steps {
                script {
                    sh 'node server' //  server entry point
                }
            }
        }
        stage('Notify Slack') {
            steps {
                script {
                    slackSend(channel: '#YourFirstName_IP1', message: "Build successful! Visit: ${env.RENDER_URL}")
                }
            }
        }
    }
    post {
        failure {
            mail to: 'your-email@example.com',
                 subject: "Build Failed: ${currentBuild.fullDisplayName}",
                 body: "Something is wrong with ${env.JOB_NAME} ${env.BUILD_NUMBER}"
        }
    }
}