var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://pita:DJRqnzsNtyzgtp2k@cluster0.0thoj.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://pita:DJRqnzsNtyzgtp2k@cluster0.0thoj.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://pita:DJRqnzsNtyzgtp2k@cluster0.0thoj.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
