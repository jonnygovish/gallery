pipeline {
    agent any

    tools {
        nodejs "node18"
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build || echo "No build script"'
            }
        }

        stage('Deploy to Render') {
            steps {
                sh '''
                curl -X POST "$RENDER_DEPLOY_HOOK"
                '''
            }
        }
    }
}

