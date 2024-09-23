const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// connecting the database
// let mongodb_url = 'mongodb://localhost:27017/';
let mongodb_url = 'mongodb+srv://eldad:Mwangi10835@darkroom.ipuj2.mongodb.net/?retryWrites=true&w=majority&appName=darkroom';
let dbName = 'darkroom';
mongoose.connect(`${mongodb_url}${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
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



 
const PORT = process.env.PORT || 4000;
app.listen(PORT,() =>{
    console.log(`Server is listening at http://localhost:${PORT}`)
});

module.exports = app;