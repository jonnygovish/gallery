var config = {}

// Joseph's MongoDB Atlas cluster (corrected)
config.mongoURI = {
    production: process.env.MONGODB_URI || 'mongodb+srv://joseph:Bigmeech12@cluster0.qvxhxmt.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://joseph:Bigmeech12@cluster0.qvxhxmt.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://joseph:Bigmeech12@cluster0.qvxhxmt.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}

module.exports = config;
