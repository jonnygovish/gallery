var config = {}

// Update to have your correct username and password
//mongodb+srv://mertangy:<password>@gallery.cj6v9ym.mongodb.net/?retryWrites=true&w=majority
config.mongoURI = {
    production:'mongodb+srv:mertangy:IwasBinZiani$84@gallery.cj6v9ym.mongodb.net/?retryWrites=true&w=majority'
    //production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    //development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    //test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
