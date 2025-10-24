pipeline {
    agent any

    tools {
        nodejs 'nodeJS22'
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/nancynaomy/gallery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build || echo "No build step"'
            }
        }

        stage('Deploy to Render') {
            steps {
                withCredentials(
                       [string
                          (credentialsId: 'render-webhook', variable: 'DEPLOYHOOK')
                        ]
                        ) {
                    sh 'curl -X POST $DEPLOYHOOK'
                }
            }
        }
    }

    post {
        success {
            slackSend(
                channel: '#nancy_ip1',
                tokenCredentialId: 'slack',
                color: 'good',
                message: "SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER} deployed to Render.\nView app: https://gallery-7io0.onrender.com\n${env.BUILD_URL}"
            )
        }

        failure {
            slackSend(
                channel: '#paul_ip1',
                tokenCredentialId: 'slack',
                color: 'danger',
                message: "FAILURE: ${env.JOB_NAME} #${env.BUILD_NUMBER} failed.\n${env.BUILD_URL}"
            )
        }
    }
}
