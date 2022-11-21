var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://mishael:WlWSovrMZhy1z7kv@gallery.wc344.mongodb.net/darkroom?retryWrites=true',
    development: 'mongodb+srv://mishael:WlWSovrMZhy1z7kv@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true',
    test: 'mongodb+srv://mishael:WlWSovrMZhy1z7kv@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true',
}
module.exports = config;
