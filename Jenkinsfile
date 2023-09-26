pipeline {
    agent any

    tools {
        nodejs "NodeJS 20.7.0"
    }

    stages {
        stage('Checkout Git') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies using npm
                sh 'npm install'
            }
        }

        stage('Run Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Send a Notification to Slack') {
            steps {
                script {
                    // Get the Build ID
                    def buildId = currentBuild.number

                    // Define the Render URL
                    def renderUrl = 'https://my-week-2-ip-1-web-service.onrender.com/'
                    // Message text with Build ID and Render link
                    def message = "Deployment to Render completed successfully. (Build ID: ${buildId}).\nRender: ${renderUrl}"
                    // Send a notification to Slack via the Incoming WebHooks Integration
                    sh """
                    curl -X POST --data-urlencode 'payload={
                        "channel": "maureen_ip1",
                        "username": "notificationbot",
                        "text": "\${message}",
                        "icon_emoji": ":tada:"
                    }' https://hooks.slack.com/services/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
                    """
                }
            }
        }

        
        
    }
    post {
        success {
            script {
                slackSend(channel: "maureen_ip1", message: "Deployment to Render completed successfully")
            }
        }

        failure {
          echo "One or more steps need to be included within each condition's block."
        }
    }
}