pipeline {
  agent any
  tools {
    nodejs 'NodeJS'
  }

  stages {
    stage('clone repo') {
      steps {
        echo 'cloning repo'
        git 'https://github.com/igalgallo/gallery.git'
      }
    }
      stage('install dependancies') {
      steps {
        echo 'install dependancies'
        sh 'npm install'
      }
      }
      stage('test') {
      steps {
        echo 'running test'
        sh 'npm test'
      }
      }
      stage('deploy') {
      steps {
        echo 'running deployment to heroku'
        withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
        sh "git push https://${HEROKU_CREDENTIALS}@git.heroku.com/stormy-ocean-69197.git master"
      }
      }
  }
}
