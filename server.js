const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// connecting the database
const USERNAME = "vusena";
const PASSWORD = "Tuesday%4020";   // URL-encoded password
const DB_NAME = "gallerydb";

const mongoURI = `mongodb+srv://${USERNAME}:${PASSWORD}@gallerydb.kaappuz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) console.log("MongoDB connection error:", err);
    else console.log("✅ Database connected successfully to MongoDB Atlas");
});


// test if the database has connected successfully
let db = mongoose.connection;
db.once('open', ()=>{
    console.log('Database connected successfully')
})

// Initializing the app
const app = express();


// View Engine
app.set('view engine', 'ejs');

// Set up the public folder;
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json())


app.use('/', index);
app.use('/image', image);

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is listening at http://0.0.0.0:${PORT}`);
});
