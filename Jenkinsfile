pipeline {
    agent any
    
    tools {
        gradle "Gradle 8.3"
        nodejs '12.22.9' 
    }

    stages {
        stage('Checkout') {
            steps {
                // Checks code from the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Installs npm dependencies
                sh 'npm install'
            }
        }

        stage('Build the Project') {
            steps {
                // Builds project (Using Gradle)
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
                // Uses Render CLI or API to deploy  app
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
