var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://Marrieh:Z1jtkRyQl7ZdG1Na@cluster1.oroadpr.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://Marrieh:Z1jtkRyQl7ZdG1Na@cluster1.oroadpr.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://Marrieh:Z1jtkRyQl7ZdG1Na@cluster1.oroadpr.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
