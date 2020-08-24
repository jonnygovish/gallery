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
       stage('Deploy to Heroku') {
            steps {
                sh 'git push https://Sitienei:b7b35d6e-7ed7-4210-bb2b-a51ab79514dc@git.heroku.com/gentle-hollows-39973.git master'
          }  
        }
    }
}