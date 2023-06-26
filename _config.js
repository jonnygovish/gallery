var config = {}

// Update to have your correct username and password
config.mongoURI = {

    production: 'mongodb+srv://user-Gallery:3392330@cluster0.whje4pz.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://user-Gallery:3392330@cluster0.whje4pz.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://user-Gallery:3392330@cluster0.whje4pz.mongodb.net/darkroom-test?retryWrites=true&w=majority',

}
module.exports = config;
