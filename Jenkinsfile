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

        stage('Build') 
        {
            steps
            {
                // Install Dependencies and Build
                echo 'Installing Dependencies...'
                sh 'npm ci' 
            }
        } 

        stage('Deploy to Render') 
        {
            steps
            {
                // Deploy application to Render
                echo 'Deploying application...'
                sh 'curl -X POST https://api.render.com/deploy/srv-cicm87t9aq03rjn463ng?key=nLGpsIAltrA&ref=eb2885a1d6cb327a1d77b9e32d7be99d3765236b'
            }
        }
    }
}