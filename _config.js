var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://ARTHUR:Cristiano7!@cluster001.8kpqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster001',
    development: 'mongodb+srv://ARTHUR:Cristiano7!cluster001.8kpqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster001',
    test: 'mongodb+srv://ARTHUR:Cristiano7!@cluster001.8kpqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster001',
};

module.exports = config;
