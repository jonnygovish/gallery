pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage('Node.js apps Version') {
            steps {
                sh 'node --version'
            }
        }
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/eldadmwangi/gallery.git'
            }
        }
        stage('Install npm Packages') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Application') {
            steps {
                sh 'nohup node server.js &'
            }
        }
    }
}

