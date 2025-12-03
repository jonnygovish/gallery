pipeline {
    agent any

    tools {
        nodejs "node18"   // MUST match the name you configured in Jenkins global tools
    }

    stages {
        stage('Checkout') {
            steps {
                checkout test
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build || true'
            }
        }

        stage('Deploy to Render') {
            steps {
                sh '''
                curl -X POST \
                -H "Accept: application/json" \
                -H "Authorization: Bearer $RENDER_API_KEY" \
                -H "Content-Type: application/json" \
                --data '{"clearCache":false}' \
                https://api.render.com/v1/services/$RENDER_SERVICE_ID/deploys
                '''
            }
        }
    }
}

