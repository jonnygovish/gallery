var config = {}

// Update to have your correct username and password
config.mongoURI = {

    production: 'mongodb+srv://gallery-User:33492330@cluster0.whje4pz.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://gallery-User:33492330@cluster0.whje4pz.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://gallery-User:33492330@cluster0.whje4pz.mongodb.net/darkroom-test?retryWrites=true&w=majority',

}
module.exports = config;
