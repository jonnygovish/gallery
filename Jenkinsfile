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
        stage('Deploy Heroku') {
            steps {
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'PASS')])  {
                    sh 'git push https://${PASS}@git.heroku.com/trialapp2.git master'
                  }
            }
        }
    }
    }            




