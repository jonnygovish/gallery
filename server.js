const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

// Initialize the app FIRST
const app = express();

// Get the Mongo URI for the current environment
let mongodb_url = config.mongoURI[app.settings.env || 'development'];

// Connect to MongoDB (darkroom DB is already specified in the URI)
mongoose.connect(`${mongodb_url}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log(err);
});

// Test DB connection
const db = mongoose.connection;
db.once('open', () => {
    console.log('Database connected successfully');
});

// Define routes
const index = require('./routes/index');
const image = require('./routes/image');

// View Engine
app.set('view engine', 'ejs');

// Serve public folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/', index);
app.use('/image', image);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
