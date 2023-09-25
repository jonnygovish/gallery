pipeline {
    agent any

    tools {nodejs "NodeJS 20.7.0"}

    stages {
        stage('Checkout Git') {
            steps {
                checkout scm
            }
        }
        
        stage('Check version') {
            steps {
                sh 'node -v'
                sh 'npm -v'
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

        stage('Deploy Web Service to Render') {
            steps {
                script {
                    // Set Render API token as an environment variable
                    env.RENDER_SERVICE_NAME = 'My-Week-2-IP-1-Web-Service'
                    env.RENDER_API_TOKEN = credentials('rnd_Jz7kRdcG2LFXQ0UlxqUTp5sBwG4k')
                    env.RENDER_ENVIRONMENT = 'development'
                    env.RENDER_BRANCH = 'master'

                    // Deploy to Render using Render CLI
                    sh """
                    render login --token $RENDER_API_TOKEN
                    render up --environment $RENDER_ENVIRONMENT --service $RENDER_SERVICE_NAME --branch $RENDER_BRANCH
                    """
                }
            }
        }
        
        stage('Send a Notification to Slack') {
            steps {
                script {
                    // Get the Build ID
                    def buildId = currentBuild.number

                    // Define the Render URL
                    def renderUrl = 'https: //my-week-2-ip-1-web-service.onrender.com/'
                    // Message text with Build ID and Render link
                    def message = "Deployment to Render completed successfully. (Build ID: ${buildId}).\nRender: ${renderUrl}"
                    // Send a notification to Slack via the Incoming WebHooks Integration
                    sh """
                    curl -X POST --data-urlencode 'payload={
                        "channel": "maureen_ip1",
                        "username": "notificationbot",
                        "text": "${message}",
                        "icon_emoji": ":tada:"
                    }' https: //hooks.slack.com/services/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 """
                }
            }
        }
    }
}