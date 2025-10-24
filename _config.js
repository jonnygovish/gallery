require('dotenv').config();
var config = {}

const {username = process.env.MONGOUSER,
    userpassword = process.env.MONGOPASSWORD,
    mongocluster = process.env.MONGOHOST,
    prod_env = process.env.MONGOPRODUCTIONDATABASE,
    dev_env = process.env.MONGODEVDATABASE,
    test_env = process.env.MONGOTESTDATABASE} = process.env;

// Update to have your correct username and password
config.mongoURI = {
    production: `mongodb+srv://${username}:${userpassword}@${mongocluster}/${prod_env}?retryWrites=true&w=majority`,
    development: `mongodb+srv://${username}:${userpassword}@${mongocluster}/${dev_env}?retryWrites=true&w=majority`,
    test: `mongodb+srv://${username}:${userpassword}@${mongocluster}/${test_env}?retryWrites=true&w=majority`,

}
module.exports = config;