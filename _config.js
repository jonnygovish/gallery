var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://wnjenga:darkroom2023@@cluster0.uvsqfdd.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://wnjenga:darkroom2023@@cluster0.uvsqfdd.mongodb.net/darkroom?retryWrites=true&w=majority',
    test: 'mongodb+srv://wnjenga:darkroom2023@@cluster0.uvsqfdd.mongodb.net/darkroom?retryWrites=true&w=majority',
}
module.exports = config;
