pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    environment {
        DEPLOY_HOOK_URL = 'https://api.render.com/deploy/srv-crojqld6l47c73foj10g?key=gX4-DTi_aYM'
        RENDER_API_KEY = credentials('render-api-key') // Store your Render API key in Jenkins credentials
        SERVICE_ID = 'gallery' // Replace with your Render service ID
        // RENDER_URL = 'https://gallery-0hxp.onrender.com' // Render API endpoint for deployment
        RENDER_URL= 'https://api.render.com/deploy/srv-croglm56l47c73fnhddg?key=wEe8ff0bDFE'
    }
    stages {
        stage('Node.js apps Version') {
            steps {
                sh 'node --version'
            }
        }
        stage('Clone this Repository') {
            steps {
                git branch: 'test-branch', url: 'https://github.com/eldadmwangi/gallery.git'
            }
        }
        stage('Install npm Packages') {
            steps {
                sh 'npm install'
                sh 'npm install mongodb'
                sh 'npm install -g webpack'
            }
        }
        stage('Build') {
            steps {
                echo 'Running the build...'
                sh 'npm run build'
            }
        }
        stage('Npm Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy to Render122') {
            steps {
                script {
                    def response = sh(script: """
                        curl -X POST ${DEPLOY_HOOK_URL}
                    """, returnStdout: true).trim()
                   
                    echo "Deployment Response: ${response}"
                }
            }

               /* CORRECT */
               // sh('curl -u $EXAMPLE_CREDS_USR:$EXAMPLE_CREDS_PSW https://example.com/')
        }
        stage('Deploy to Render') {
            steps {
                script {
                    def response = sh(script: """
                        curl -X POST ${RENDER_URL} \
                        -H "Authorization: Bearer ${RENDER_API_KEY}" \
                        -H "Content-Type: application/json" \
                        -d '{
                            "serviceId": "${SERVICE_ID}"
                        }'
                    """, returnStdout: true).trim()
                   
                    echo "Deployment Response: ${response}"
                }
            }
        }
        stage('Run Application') {
            steps {
                sh 'nohup node server.js &'
            }
        }
    }
}






