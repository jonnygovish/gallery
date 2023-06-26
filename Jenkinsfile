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
        withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS')])
        {
          sh "git push https://${HEROKU_CREDENTIALS}@git.heroku.com/stormy-ocean-69197.git master"
        }
      }
      }
      stage('slack integration') {
        steps {
          slackSend channel: '#general', message: "Successful Application deployment on heroku.Build number: ${env.BUILD_NUMBER}\n here is the link to the application:https://stormy-ocean-69197-ecce6bd1bd80.herokuapp.com/"
        }
      }
  }
  post {
    success {
      echo "One or more steps need to be included within each condition's block"

      emailext attachLog: true,
                body:
                    """
                    <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>
                    <p>
                    View console output at
                    "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"
                    </p>
                      <p><i>(Build log is attached.)</i></p>
                    """,
                subject: "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'",
                to: 'iladho.galgallo@student.moringaschool.com'
    }
    failure {
      echo "One or more steps need to be included within each condition's block."

      emailext attachLog: true,
                body:
                    """
                    <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>
                    <p>
                    View console output at
                    "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"
                    </p>
                      <p><i>(Build log is attached.)</i></p>
                    """,
                subject: "Status: FAILURE -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'",
                to: 'iladho.galgallo@student.moringaschool.com'
    }
  }
}
