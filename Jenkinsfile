pipeline{
    agent any
    tools{
        nodejs 'Nodejs'
    }
    stages{
        stage('clone-repo'){
            steps{
                 git branch:'master',url:'https://github.com/Chege2004/gallery.git'
            }
        }
        stage('build-project'){
            steps{
                sh 'npm install'
            }
        }
        stage('test-project'){
            steps{
                sh 'npm test'
            }   
        }
    }
}