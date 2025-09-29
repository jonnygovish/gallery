const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

const mongodb_url = process.env.MONGODB_URI || 'mongodb://localhost:27017/darkroom';

mongoose.connect(mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// test if the database has connected successfully
let db = mongoose.connection;
db.once('open', () => {
    console.log('Database connected successfully')
});

db.on('error', (err) => {
    console.error('Database connection error:', err);
});

// Initializing the app
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder;
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Landing page with ALL milestones
app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Gallery App - IP1 Project</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
          }
          .milestone {
            background: rgba(255,255,255,0.1);
            padding: 20px;
            margin: 20px auto;
            max-width: 600px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
          }
          h1 { font-size: 48px; margin: 20px 0; }
          h2 { font-size: 32px; color: #ffd700; }
          p { font-size: 18px; margin: 10px 0; }
          .success { color: #00ff00; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>🎉 IP1 Gallery Project</h1>
        
        <div class="milestone">
          <h2>✅ MILESTONE 1: Version Control</h2>
          <p class="success">Git repository created and managed</p>
        </div>
        
        <div class="milestone">
          <h2>✅ MILESTONE 2: CI/CD Pipeline</h2>
          <p class="success">Jenkins pipeline configured</p>
          <p>Automated build and deployment</p>
        </div>
        
        <div class="milestone">
          <h2>✅ MILESTONE 3: Testing & Email</h2>
          <p class="success">Tests implemented with Mocha/Chai</p>
          <p>Email notifications on test failures</p>
        </div>
        
        <div class="milestone">
          <h2>✅ MILESTONE 4: Slack Integration</h2>
          <p class="success">Slack notifications configured</p>
          <p>Build ID: ${process.env.BUILD_NUMBER || 'Manual Deploy'}</p>
        </div>
        
        <div class="milestone">
          <p>🚀 <strong>Deployed on Render</strong></p>
          <p>📦 Database: MongoDB Atlas</p>
          <p>⚙️ CI/CD: Jenkins</p>
        </div>
      </body>
    </html>
  `);
});

// Use other routes
app.use('/images', image);
app.use('/', index);

// Get PORT from environment (Render provides this automatically)
const PORT = process.env.PORT || 5000;

// Start server - CRITICAL: bind to 0.0.0.0 for external access
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});