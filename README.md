# Gallery

A simple image gallery web application built with Node.js and Express. This project allows users to view, upload, and manage images through a web interface.

## Website
   You can try the live demo here: [Live Demo](https://https://gallery2-8u49.onrender.com/)

## Features
- View a gallery of images
- Upload new images
- View single image details
- Responsive design with CSS
- RESTful routes for image management

## Project Structure
```
_config.js           # Custom configuration
Dockerfile           # Docker container setup
Jenkinsfile          # CI/CD pipeline configuration
package.json         # Project metadata and dependencies
Procfile             # Process definition for deployment
server.js            # Main server file
models/              # Mongoose models
public/              # Static assets (CSS, JS, images)
routes/              # Express route handlers
test/                # Test files
views/               # EJS templates
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/nancynaomy/gallery.git
   cd gallery
   ```
   
2. Install dependencies:
   ```bash
   ## Website
   You can try the live demo here: [Live Demo](https://https://gallery2-8u49.onrender.com/)

### Running with Docker
Build and run the Docker container:
```bash
docker build -t gallery-app .
docker run -p 3000:3000 gallery-app
```

### Testing
Run tests with:
```bash
npm test
```

## Deployment
- Deployed to render.
- The `Jenkinsfile` provides a sample CI/CD pipeline for Jenkins.

## Configuration
- Application-specific settings can be found in `_config.js`.
- Environment variables can be set for production use.

## License
This project is free to use.
