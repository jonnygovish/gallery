const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Updated MongoDB configuration with better connection string and options
const mongodb_url = process.env.MONGODB_URI || 'mongodb://localhost:27017/darkroom';

mongoose.connect(mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30 seconds timeout
    bufferMaxEntries: 0,
    maxPoolSize: 10,
    socketTimeoutMS: 0,
    family: 4 // Use IPv4, skip trying IPv6
})
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        // Don't exit process immediately to allow for retries
    });

// Enhanced database connection event handling
let db = mongoose.connection;

db.once('open', () => {
    console.log('Database connected successfully');
});

db.on('error', (err) => {
    console.error('Database connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

db.on('reconnected', () => {
    console.log('MongoDB reconnected');
});

// Graceful shutdown handling
process.on('SIGINT', async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed through app termination');
        process.exit(0);
    } catch (err) {
        console.error('Error during graceful shutdown:', err);
        process.exit(1);
    }
});

// Initializing the app
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Added for form submissions

// Routes
app.use('/', index);
app.use('/image', image);

// Health check endpoint for deployment platforms
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

// Updated to bind to all interfaces for deployment
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});