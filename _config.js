var config = {}

// Update with your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://brianbwire:Brayo@2788@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://brianbwire:Brayo@2788@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://brianbwire:Brayo@2788@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}

module.exports = config;
