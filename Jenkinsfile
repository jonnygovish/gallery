pipeline {
    agent any

    tools {
        nodejs "node18"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                script {
                    if (fileExists("package.json")) {
                        def pkg = readJSON file: 'package.json'
                        if (pkg.scripts && pkg.scripts.build) {
                            sh 'npm run build'
                        } else {
                            echo "No build script defined — skipping build."
                        }
                    } else {
                        echo "package.json not found"
                    }
                }
            }
        }

        stage('Deploy to Render') {
            steps {
                sh '''
                    if [ -n "$RENDER_DEPLOY_HOOK" ]; then
                        curl -X POST "$RENDER_DEPLOY_HOOK"
                    else
                        echo "RENDER_DEPLOY_HOOK variable not set — skipping deployment."
                    fi
                '''
            }
        }
    }
}

