pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'git@github.com:omwoyojohn/gallery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
            post {
                failure {
                    echo 'Tests failed.'
                    emailext(
                        subject: "Jenkins Build #${env.BUILD_NUMBER} Failed",
                        body: "Build failed during tests. Please check Jenkins logs for more details.",
                        to: 'omwoyojohn91@gmail.com'
                    )
                    error('Tests did not pass.')
                }
                success {
                    echo 'Tests passed.'
                }
            }
        }

        stage('Deploy to Render') {
            steps {
                echo 'Deploying to Render...'
                sh "curl -X POST https://api.render.com/deploy/srv-d1cit115pdvs73etlbo0?key=MhGvOei8u9Y"
            }
            post {
                success {
                    slackSend(
                        channel: '#omwoyo-ip1',
                        color: 'good',
                        message: "✅ Milestone 3 Deployed! Build #${env.BUILD_NUMBER}: https://gallery-u51o.onrender.com",
                        teamDomain: 'OmwoyoTeam',
                        tokenCredentialId: 'slacktoken',
                        botUser: true
                    )
                    slackSend(
                        channel: '#all-ip-1-assignment',
                        color: 'good',
                        message: "📢 Omwoyo’s Build #${env.BUILD_NUMBER} has been deployed: https://gallery-u51o.onrender.com",
                        teamDomain: 'OmwoyoTeam',
                        tokenCredentialId: 'slacktoken',
                        botUser: true
                    )
                }
            }
        }
    }

    post {
        success {
            echo 'Build and deployment completed successfully.'
        }
        always {
            echo 'Pipeline execution complete.'
        }
    }
}
