const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', index);
app.use('/image', image);

if (process.env.NODE_ENV !== 'test') {
    const mongodb_url = process.env.MONGODB_URI || config.mongoURI.development;

    mongoose.connect(mongodb_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
        connectTimeoutMS: 10000 // Give up initial connection after 10s
    })
        .then(() => console.log(`Connected to Database: ${mongodb_url}`))
        .catch(err => console.error("MongoDB connection failed:", err));

    const PORT = process.env.PORT || 50000;
    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`);
    });
}

module.exports = app;