pipeline {
    agent any
    
    tools {
        gradle "Gradle 8.3"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your code from the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies (You mentioned Gradle, so adjust as needed)
                sh 'npm install' // Change this to Gradle commands if needed
            }
        }

        stage('Build the Project') {
            steps {
                // Build your project (Using Gradle)
                sh 'gradle build'
            }
        }

        stage('Tests') {
            steps {
                // Run tests (Using Gradle)
                sh 'gradle test'
            }
        }

        stage('Deploy to Render') {
            steps {
                // Use Render CLI or API to deploy your app
                sh 'render deploy'
            }
        }
    }
    
    post {
        success {
            // Send notifications or perform additional actions on success
            echo 'Pipeline succeeded!'
        }
    }
}
