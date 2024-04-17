def COLOR_MAP =[
    'FAILURE':'danger',
    'SUCCESS':'good'
]
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
        post{
            always{
                echo 'Slack Notifications'
                SlackSend(
                    channel:'#manasseh_ip1',
                    color:COLOR_MAP[currentBuild.currentResult],
                    message:''$(currentBuild.currentResult):*job $[env.JOB_NAME] \n more info at:$(env.BUILD_URI)
                )
            }
        }
    }
}