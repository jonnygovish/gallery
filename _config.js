var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://janyc:janojano@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://janyc:janojano@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://janyc:janojano@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
