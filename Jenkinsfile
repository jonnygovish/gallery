pipeline {
    agent any
    tools {
        nodejs "Node-Build"
        }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                echo 'Testing....'
            }
         }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        stage('Add remote') {
            steps {
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
                sh 'git remote add heroku  https://${HEROKU_CREDENTIALS}@git.heroku.com/limitless-meadow-81845.git'                
                }
            } 
        }
        stage('Deploy to Heroku') {
            steps {
                sh 'git push heroku HEAD:master'                
                }
            } 
        }
    }