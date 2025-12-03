pipeline {
    agent any

    triggers {
        githubPush()   // Auto-build on every push
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Node') {
            steps {
                sh '''
                    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
                    sudo apt-get install -y nodejs
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy to Render') {
            steps {
                sh 'curl -X POST $RENDER_DEPLOY_WEBHOOK'
            }
        }
    }
}
