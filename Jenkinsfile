pipeline {
    agent any

    environment {
        SLACK_CHANNEL = '#gibson_ip1' 
        SLACK_CREDENTIALS_ID = 'slack-token'
        GIT_REPO = 'https://github.com/Gibwanjau/gallery.git' 
        GIT_BRANCH = 'main' 
        GIT_CREDENTIALS_ID = 'git-token'
        EMAIL_RECIPIENT = 'gibson.wanjau1@student.moringaschool.com'

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout the code from the repository
                    checkout([$class: 'GitSCM', branches: [[name: "*/${GIT_BRANCH}"]],
                              userRemoteConfigs: [[url: GIT_REPO, credentialsId: GIT_CREDENTIALS_ID]]])
                }
            }
        }

        stage('Install Node and Dependencies') {
            steps {
                script {
                    // Install Node.js and npm (if not installed)
                    sh 'curl -sL https://deb.nodesource.com/setup_14.x | bash -'
                    sh 'apt-get install -y nodejs'
                    
                    // Install npm dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the application
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the application (this is a placeholder; replace with actual deployment commands)
                    echo 'Deploying the application...'
                }
            }
        }

        stage('Git Push') {
            steps {
                script {
                    // Configure Git user
                    sh '''
                    git config user.name "Your Name"
                    git config user.email "youremail@example.com"
                    '''
                    
                    // Add changes
                    sh 'git add .'

                    // Commit changes
                    sh 'git commit -m "Automated commit from Jenkins build #${env.BUILD_NUMBER}" || echo "No changes to commit"'

                    // Push changes
                    sh 'git push origin ${GIT_BRANCH}'
                }
            }
        }

        stage('Notify') {
            steps {
                script {
                    slackSend(channel: SLACK_CHANNEL,
                               message: "Build #${env.BUILD_NUMBER} completed: ${currentBuild.currentResult}",
                               tokenCredentialId: SLACK_CREDENTIALS_ID)
                }
            }
        }
    }

    post {
        always {
            script {
                slackSend(channel: SLACK_CHANNEL,
                           message: "Build #${env.BUILD_NUMBER} finished with status: ${currentBuild.currentResult}",
                           tokenCredentialId: SLACK_CREDENTIALS_ID)
            }
        }
        success {
            script {
                slackSend(channel: SLACK_CHANNEL,
                           message: "Build #${env.BUILD_NUMBER} succeeded!",
                           tokenCredentialId: SLACK_CREDENTIALS_ID)
            }
        }
        failure {
            script {
                // Send email notification on failure
                mail to: EMAIL_RECIPIENT,
                     subject: "Build #${env.BUILD_NUMBER} Failed",
                     body: "The build failed. Check Jenkins for more details."
                
                slackSend(channel: SLACK_CHANNEL,
                           message: "Build #${env.BUILD_NUMBER} failed!",
                           tokenCredentialId: SLACK_CREDENTIALS_ID)
            }
        }
    }
}
