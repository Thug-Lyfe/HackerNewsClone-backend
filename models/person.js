const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: String,
    number: String
});

var Person = mongoose.model('Person', personSchema);

module.exports = Person;