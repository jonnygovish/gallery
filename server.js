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

// 👇 Add MILESTONE 2 on landing page (put this BEFORE other routes)
app.get("/", (req, res) => {
    res.send(`
    <html>
      <body style="text-align:center; margin-top:50px;">
        <h1 style="font-size:48px; color:red;">MILESTONE 2</h1>
      </body>
    </html>
  `);
});

// Use routes (these will handle other paths)
app.use('/', index);
app.use('/image', image);

const PORT = process.env.PORT || 5000;

// Fix: Bind to 0.0.0.0 for external access on Render
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is listening on port ${PORT}`);
});

