pipeline{
    agent any
    tools{
        nodejs 'Nodejs'
    }
    stages{
        stage('clone-repo'){
            steps{
                 git branch:'master',url:'https://github.com/Chege2004/gallery.git'
                 slacksend message: 'Successful cloning'
            }
        }
        stage('build-project'){
            steps{
                sh 'npm install'
                slacksend message :'Build successful'
            }
        }
        stage('test-project'){
            steps{
                sh 'npm test'
                slacksend message :'Test successful'
            }
        }
    }
}