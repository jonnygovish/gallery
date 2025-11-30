require('dotenv').config({ quiet: true, inject: {} });

var config = {};

const { MONGO_USERNAME: username, MONGO_PASSWORD: password} = process.env;

config.mongoURI = {
    production: `mongodb+srv://${username}:${password}@cluster0.2jsyouj.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster0`,
    development: `mongodb+srv://${username}:${password}@cluster0.2jsyouj.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=Cluster0`,
    test: `mongodb+srv://${username}:${password}@cluster0.2jsyouj.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=Cluster0`,

    }
module.exports = config;
