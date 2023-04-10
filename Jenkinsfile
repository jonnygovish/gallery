pipeline {
    agent any
    tools{
        nodejs "node"
    }

    stages {
        stage('Clone repository') {
            steps {
                git 'https://github.com/ombongiMN/gallery.git'
            }
        }
        stage('Installing dependencies') {
            steps {
                sh 'npm install'
            }
    }





