var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://ndungu:kali@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://ndungu:kali@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://ndungu:kali@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = {
    mongoURI: "mongodb+srv://ndungu:<password>@cluster0.hsemuod.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
}
