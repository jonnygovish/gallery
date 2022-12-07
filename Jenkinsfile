pipeline{
    agent any
    tools{
        nodejs "nodejs"
    }
    stages{
        stage('Clone Repository'){
            steps{
                git 'https://github.com/MishaelRatemo/gallery-devops'
            }
        }
        stage ('Project Build') {
            steps {
                sh 'npm install'
            }
        }
        stage ('Running Tests') {
            steps {
                sh 'npm test'  
            }
       }
       stage('Deploy to Heroku') {
            steps {
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )])
                {
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/gallary-devops.git master'
                }
            }
    
           }    
    }
}