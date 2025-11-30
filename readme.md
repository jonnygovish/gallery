# Gallery Website

A JavaScript-based website built with Express and MongoDB Atlas, deployed via Render with CI/CD powered by Jenkins.

## Features
- Simple gallery web app
- MongoDB Atlas integration
- Templating with EJS
- Continuous Deployment to Render via Jenkins

## Tech Stack
- **Backend**: Node.js + Express
- **Database**: MongoDB Atlas
- **Templating**: EJS
- **CI/CD**: Jenkins
- **Hosting**: Render

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm
- Git

### Setup
Clone the repository:
```bash
git clone https://github.com/machoyamwangi/gallery.git
cd gallery

### install dependencies
npm install

###create .env file
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.2jsyouj.mongodb.net/darkroom?retryWrites=true&w=majority
PORT=5000

### Start locally
npm start
http://localhost:5000

###Jenkins Pipeline
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/machoyamwangi/gallery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy to Render') {
            steps {
                withCredentials([string(credentialsId:'render-webhook', variable:'deploy')]) {
                    sh 'curl -X POST $deploy'
                }
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully and deployed to Render!'
        }
        failure {
            echo '❌ Pipeline failed. Check Jenkins logs.'
        }
    }
}
/home/herman/Pictures/Screenshots/Screenshot from 2025-09-23 08-52-16.png /home/herman/Pictures/Screenshots/Screenshot from 2025-09-23 08-54-18.png /home/herman/Pictures/Screenshots/Screenshot from 2025-09-23 08-56-08.png /home/herman/Pictures/Screenshots/Screenshot from 2025-09-23 08-56-27.png


### Deployment on render with demo link
https://your-app.onrender.com

