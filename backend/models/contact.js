'use strict'

var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
    name: String,
    companyName: String,
    email: String,
    celphone: String,
    category: String,
    message: String
});

module.exports = mongoose.model('Contact',ContactSchema);