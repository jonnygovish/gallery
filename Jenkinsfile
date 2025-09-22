pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    environment {
        RENDER_URL = 'https://gallery-7ss6.onrender.com/'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/Vusena/gallery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Check') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm run lint || echo "No lint step defined, skipping..."'
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    try {
                        sh 'npm test'
                    } catch (err) {
                        currentBuild.result = 'FAILURE'
                        emailext (
                            subject: "Jenkins Build Failed: ${env.JOB_NAME}",
                            body: "Tests failed. Check console output: ${env.BUILD_URL}",
                            to: "youremail@example.com"
                        )
                        throw err
                    }
                }
            }
        }

        stage('Deploy to Render') {
            steps {
                sh 'curl -X POST https://api.render.com/deploy/srv-d37rsh8gjchc73cha5gg?key=lt2ylZma3wY'
            }
        }
    }

    post {
        success {
            slackSend(
                channel: "#eunice_ip1",
                color: "good",
                message: "Deployment SUCCESS!\nBuild ID: ${env.BUILD_NUMBER}\nRender URL: ${env.RENDER_URL}\nMore info: ${env.BUILD_URL}"
            )
        }
    }
}
