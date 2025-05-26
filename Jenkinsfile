pipeline {
    agent any

    environment {
        MONGODB_URI = credentials('MONGODB_ATLAS_URI')
        SLACK_WEBHOOK = credentials('SLACK_WEBHOOK')
        MONGO_URI = credentials('MONGO_URI') 
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to Render') {
            steps {
                sh './deploy.sh'
                sh 'curl -X POST "https://api.render.com/deploy/srv-d0k7j78gjchc73a6l740?key=rnd_TrJE8optGXBVX45"'
            }
        }

        stage('Notify Slack') {
            steps {
                slackSend (
                    webhookUrl: env.SLACK_WEBHOOK,
                    message: "✅ Jenkins Pipeline: Gallery app deployed successfully!",
                    color: '#36a64f'
                )
            }
        }
    }

    post {
        success {
            slackSend (channel: '#all-student', message: "✅ Jenkins pipeline completed successfully.")
        }
        failure {
            slackSend (channel: '#all-student', message: "❌ Jenkins pipeline failed.")
        }
    }
}
