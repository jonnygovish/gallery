pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull latest code from your GitHub repo
                git branch: 'master',
                    url: 'https://github.com/machoyamwangi/gallery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Deploy to Render') {
            steps {
                // Trigger Render deploy via webhook
                withCredentials([string(credentialsId:'render-webhook',variable:'deploy')]){
                sh 'curl -X POST $deploy'}
            }
        }
    }

    post {
        success {
            slackSend(
                channel:'#herman_ip1',
                tokenCredentialId: 'slackbot',
                message:'Build: ${currentBuild.fullDisplayName} successfully deployed \n web app "https://gallery-3-wyte.onrender.com/" '
                )
        }
        failure {
          slackSend(
                channel:'#herman_ip1',
                tokenCredentialId: 'slackbot',
                message:'Build: ${currentBuild.fullDisplayName} failed to deploy '
                )
        }
    }
}








