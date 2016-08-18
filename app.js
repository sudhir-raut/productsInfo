var server = require('./server');
var db = require('/home/web/node-projects/productsInfo/models/DBserver');
var home = require('./controller/homeStart');
var crud = require('/home/web/node-projects/productsInfo/models/CRUD')
var schema = require('/home/web/node-projects/productsInfo/models/DBschema')


var User = schema.User;
var app = server.appInst();
var doc = new User({
    name:'vikas',
    age:26,
    admin:false
});


server.start();
db.dbInst;
crud.create(doc);
home.home(app);
