const config = {};

const mongoURI = 'mongodb+srv://conquest:db_25bumBum%23@cluster0.zksscer.mongodb.net/gallery?retryWrites=true&w=majority';

config.mongoURI = {
  production: mongoURI,
  development: mongoURI,
  test: mongoURI
};

module.exports = config;
