pipeline {
    agent any

    environment {
        MONGO_URI = 'mongodb+srv://Mwaumba:Pilot2005@gallerycluster.ro7byhq.mongodb.net/?retryWrites=true&w=majority&appName=galleryCluster'
        EMAIL_RECIPIENT = 'mmwafuga@gmail.com'
        SLACK_WEBHOOK = credentials('https://hooks.slack.com/services/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')
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the repository
                git url: 'https://github.com/Mwaumba/gallery.git', branch: 'main'
            }
        }

        stage('Notify Slack') {
            steps {
                slackSend(channel: '#ip', message: "Pipeline notification", token: slack-webhook)
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Any build steps
                sh 'npm run build' 
            }
        }

        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
            post {
                success {
                    echo 'Tests passed successfully!'
                }
                failure {
                    echo 'Tests failed! Sending email notification...'
                    emailext body: "Tests failed on Jenkins for branch: ${env.BRANCH_NAME}", 
                             recipientProviders: [culprits(), requestor()],
                             subject: "Failed: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                             to: "${EMAIL_RECIPIENT}"
                }
            }
        }

        stage('Deploy to Render') {
            steps {
                sh '''
                curl -X POST "https://api.render.com/deploy/srv-cq1g5vd6l47c73anfc8g" \
                -H "Authorization: Bearer rnd_DHsliOtd5D0LKY7Cl7wiO2WppLq8" \
                -d ''
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
          echo 'Tests failed! Sending email notification...'
            emailext body: "Tests failed on Jenkins for branch: ${env.BRANCH_NAME}", 
                     recipientProviders: [culprits(), requestor()],
                     subject: "Failed: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                     to: "${EMAIL_RECIPIENT}"
        }
    }
}
