var server = require('./server');
var db = require('/home/web/node-projects/productsInfo/models/DBserver');
var home = require('./controller/homeStart');
var uModel = require('/home/web/node-projects/productsInfo/models/usersModel')
var pModel = require('/home/web/node-projects/productsInfo/models/productsModel')
var schema = require('/home/web/node-projects/productsInfo/models/DBschema')


var User = schema.Users;
var app = server.appInst();
var doc = new User({
    name:'vikas',
    age:26,
    admin:false
});

var Product = schema.Products;
var product = new Product({
   name:'Laptop',
    description:'Electronic gadget',
    price:40000,
    ownerId:123,
    imgUrl:'/home/web/node-projects/productsInfo/html/images.jpg'
});

server.start();         //starts main server
db.dbInst;              //database connection
//crud.newUser(doc);       // adds user
//pModel.addProduct(product); //adds product
home.home(app);         //sends home page to browser
pModel.ioConn();        //product model io connection
uModel.ioConn();