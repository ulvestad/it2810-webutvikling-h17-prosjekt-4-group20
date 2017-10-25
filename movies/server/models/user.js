var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    userid: String,
    email: String,
    hash: String,
}));
