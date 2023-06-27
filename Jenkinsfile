pipeline
{
    agent any

    tools
    {
        nodejs 'NodeJS'
    }

    stages
    {
        stage('Clone Git Repository') 
        {
            steps
            {
                git 'https://github.com/digitalsaina/gallery-app.git'
            }
        }

        stage('Install Dependencies')
        {
            steps
            {
                sh 'npm install'
            }
        }

        stage('Build') 
        {
            steps
            {
                // Install Dependencies and Build
                echo 'Installing Dependencies...'
                sh 'npm ci' 
            }
        } 

        stage('Run Tests') {
            steps
            {
                echo 'Running tests'
                sh 'npm test'
            }
        }

        stage('Deploy to Render') 
        {
            steps
            {
                // Deploy application to Render
                echo 'Deploying application...'
                sh 'curl -X POST https://api.render.com/deploy/srv-cidi6d6nqqlb62mi8ki0?key=ZESMZqWFOUo&ref=84c730cf6c6675b48e2fb6e67d1d6b5a4f2fa961'
            }
        }
    }

    post 
    {
        failure {
            script
            {
                // Send email notification on build failure
                sendEmail()
            }
        }
    }
}

def sendEmail()
{
    def buildUser = env.BUILD_USER_FIRST_NAME ?: 'Unknown'
    def buildCause = env.CAUSE ?: 'Unknown'
    
    emailext (
        to: "devsainar@gmail.com",
        subject: "Build Failure - ${env.JOB_NAME}",
        body: """<p>Hi,</p>
                <p>The build for ${env.JOB_NAME} has failed.</p>
                <p>Build details:</p>
                <ul>
                    <li>Build number: ${env.BUILD_NUMBER}</li>
                    <li>Build URL: ${env.BUILD_URL}</li>
                    <li>Build user: ${buildUser}</li>
                    <li>Build cause: ${buildCause}</li>
                </ul>
                <p>Please investigate and take necessary actions.</p>
                <p>Best regards,</p>
                <p>Your Jenkins Server</p>""",
        attachLog: true
    )
}
