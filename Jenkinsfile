pipeline {
    agent any


     environment {
        RENDER_URL = 'https://gallery-8uvm.onrender.com'   // your Render app link
        SLACK_WEBHOOK_URL = credentials('slack-webhook')
    }
    

    stages {
        stage('Checkout') {
            steps {
                // Pull latest code from repo
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
                // If you have a build step (like React/Vite)
                // sh 'npm run build'
                echo 'Build step (if needed)'
            }
        }

        stage('Deploy to Render') {
            steps {
                // Render doesn’t integrate directly with Jenkins,
                // but you can use git push to trigger redeploy.
                // Example: pushing to your GitHub repo that Render is watching.
                sh '''
                  git config user.name "Jenkins"
                  git config user.email "jenkins@example.com"
                  git add .
                  git commit -m "Deploy from Jenkins"
                  git push origin main
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
     stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                failure {
                    mail to: 'leonard.kiragu1@student.moringaschool.com',
                         subject: "❌ Tests Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                         body: "Check Jenkins for details: ${env.BUILD_URL}"
                }
            }
        }