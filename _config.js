var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://wnjenga:Begood90++@cluster0.uvsqfdd.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://wnjenga:Begood90++@cluster0.uvsqfdd.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://wnjenga:Begood90++@cluster0.uvsqfdd.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
