var db = require('/home/web/node-projects/productsInfo/models/DBserver');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    age: Number,
    admin: Boolean
});

var productSchema = new Schema ({
    name:String,
    description : String,
    price : Number,
    ownerId : String,
    imgUrl : String
});

exports.User = mongoose.model('User', userSchema);
exports.Products = mongoose.model('Products',productSchema);

