var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://james_rashid:james_rashid@cluster0.bwtll.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://james_rashid:james_rashid@cluster0.bwtll.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://james_rashid:james_rashid@cluster0.bwtll.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}

module.exports = config;
