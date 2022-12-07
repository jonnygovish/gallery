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
    }
}