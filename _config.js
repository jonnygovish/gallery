var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://Esther:Esschichu@21@cluster0.tgiyici.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://Esther:Esschichu@21@cluster0.tgiyici.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://Esther:Esschichu@21@cluster0.tgiyici.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;


const uri = "mongodb+srv://Esther:<password>@cluster0.tgiyici.mongodb.net/?retryWrites=true&w=majority";