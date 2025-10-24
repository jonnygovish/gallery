const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: '.env' });

const index = require('./routes/index');
const image = require('./routes/image');

const {
  MONGOUSER: username,
  MONGOPASSWORD: userpassword,
  MONGOHOST: mongocluster,
  MONGOPRODUCTIONDATABASE: prod_env,
} = process.env;

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', index);
app.use('/image', image);

if (process.env.NODE_ENV !== 'test') {
  if (!username || !userpassword || !mongocluster || !prod_env) {
    console.error("Missing MongoDB environment variables.");
    process.exit(1);
  }

  const mongoURI = `mongodb+srv://${username}:${userpassword}@${mongocluster}/${prod_env}?retryWrites=true&w=majority`;


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to Database: ${mongoURI}`))
  .catch(err => console.error("MongoDB connection failed:", err));

  const PORT = process.env.PORT || 50000;
  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });
}

module.exports = app;
