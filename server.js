const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// connecting the database

//const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://mertangy:IwasBinZiani$84@gallery.cj6v9ym.mongodb.net/?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

let mongodb_url = 'mongodb+srv://mertangy:IwasBinZiani$84@gallery.cj6v9ym.mongodb.net/?retryWrites=true&w=majority';
let dbName = 'darkroom';
mongoose.connect(`${mongodb_url}${dbName}`,{ useNewUrlParser: true , useUnifiedTopology: true }, (err)=>{
    if (err) console.log(err)
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
app.listen(PORT,() =>{
    console.log(`Server is listening at http://localhost:${PORT}`)
});