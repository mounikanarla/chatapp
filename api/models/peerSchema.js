var mongoose = require("mongoose");
//var connect= require('../config/config');
mongoose.connect('mongodb://localhost:27017/userdb', { useNewUrlParser: true });
// create instance of Schema
var mongoSchema = mongoose.Schema;
// create schema
var userSchema = new mongoSchema({
    'userid': { type: String, required: true },
    'receiverid':{type: String,required : true},
    'firstname': { type: String, required: true },
    'receivername': { type: String, required: true },
    'message': { type: String, required: true },
    'date': { type: String, required: true }
})
// create model if not exists.
module.exports = mongoose.model('peerlogs', userSchema);