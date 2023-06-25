pipeline {
  agent any
  stages {
    stage('clone repo') {
      steps {
        echo 'cloning repo'
      }
    }
      stage('install dependancies') {
      steps {
        echo 'install dependancies'
      }
      }
      stage('test') {
      steps {
        echo 'running test'
      }
      }
      stage('deploy') {
      steps {
        echo 'running deployment to heroku'
      }
      }
  }
}
