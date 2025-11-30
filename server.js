const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const methodOverride = require('method-override');


require('dotenv').config({ quiet: true, inject: {} });

const index = require('./routes/index');
const image = require('./routes/image');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride('_method'));

// Build MongoDB URI from .env
const {
  MONGO_USERNAME,
  MONGO_PASSWORD} = process.env;

const MONGO_URI = `mongodb+srv://machoyamwangi_db_user:Gorjayas2010@cluster0.2jsyouj.mongodb.net/darkroom?retryWrites=true&w=majority`;

// silence deprecation warning
mongoose.set('strictQuery', true);

// Connect to MongoDB using Mongoose
mongoose.connect(MONGO_URI)
  .then(() => console.log('Database connected successfully!!'))
  .catch(err => console.error('MongoDB connection error:', err));

// View Engine
app.set('view engine', 'ejs');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());

// Routes
app.use('/', index);
app.use('/image', image);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});

module.exports = app;