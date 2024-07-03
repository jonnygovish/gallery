pipeline {
    agent any

    environment {
      
        MONGO_URI = mongodb+srv://Mwaumba:<password>@gallerycluster.ro7byhq.mongodb.net/?retryWrites=true&w=majority&appName=galleryCluster
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the repository
                git url: 'https://github.com/Mwaumba/gallery.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Any build steps
                sh 'npm run build' 
            }
        }

        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }

        stage('Deploy to Render') {
            steps {
                sh '''
                curl -X POST "https://api.render.com/deploy/srv-cq1g5vd6l47c73anfc8g" \
                -H "Authorization: Bearer rnd_DHsliOtd5D0LKY7Cl7wiO2WppLq8" \
                -d ''
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
