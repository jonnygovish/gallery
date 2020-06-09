const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema for our database
var imageSchema = new Schema({
    name: String,
    path: String,
    size: Number,
    date: {type: Date, default: Date() }

});

// convert the schema into a Model
let Image = mongoose.model('Image', imageSchema);

module.exports = Image;