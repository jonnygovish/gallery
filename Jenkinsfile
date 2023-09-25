pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install dependencies 
                sh 'npm install'
            }
        }
        
        stage('Build and Deploy') {
            steps {
                // Build and deploy your application
                sh 'npm run build' 
                sh 'npm start'     
            }
        }
        
        stage('Update Landing Page') {
            steps {
                // Make changes to the landing page (add "MILESTONE 2")
                sh 'echo "<h1>MILESTONE 2</h1>" >> index.html' 
                sh 'git add index.html'
                sh 'git commit -m "Add MILESTONE 2"'
                sh 'git push origin master' // Push the changes to your repository
            }
        }
    }
    
    post {
        success {
            // Notify or perform additional actions upon successful pipeline execution
        }
    }
}
