pipeline {
    agent any
    tools {
        nodejs 'nodeJs'
    }
    stages {
        stage('clone repository') {
            steps {
                git branch:'master', url:'https://github.com/Emmanuel-SE/gallery.git'
            }
        }
        stage('Build project') {
            steps {
                sh 'npm install'
            }
        }
        // stage('Tests') {
        //     steps {
        //         sh 'npm run test'
        //     }
        // }
        stage('Deploy to Heroku') {
            steps {
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS')]) {
                    /* groovylint-disable-next-line GStringExpressionWithinString */
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/safe-lake-60363.git master'
                }
            }
        }
    }
}