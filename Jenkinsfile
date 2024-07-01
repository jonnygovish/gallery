

pipeline{
    agent any
    tools{
        nodejs 'nodejs'
    }
    
        stages{
            stage("Clone Repo"){
                steps{
                    git branch: 'master' , url: "https://github.com/Jmaisiba/gallery"
                }
            }
            stage("Dependency Installation"){
                steps{
                    sh 'npm install'
                }
            }
            stage("Testing"){
                steps{
                    sh 'npm test'
                }
            }
            stage('Build'){
                steps{
                    sh 'npm start'
                }
            }
            stage("Slack notification"){
                steps{
                    slackSend color: '#BADASS', message: "Build successful"
                }
            }
        }
    
}