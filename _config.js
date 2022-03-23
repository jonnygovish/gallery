var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: "mongodb+srv://<BMarasi>:<boke@gallery1>@gallery.m2cyi.mongodb.net/darkroom?retryWrites=true&w=majority",
    development: 'mongodb+srv://<BMarasi>:<boke@gallery1>@gallery.m2cyi.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<BMarasi>:<boke@gallery1>@gallery.m2cyi.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;

