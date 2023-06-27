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
    }
}