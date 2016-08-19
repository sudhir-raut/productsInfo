var ioInst = require('/home/web/node-projects/productsInfo/server');
var io = ioInst.io;
var products  = require('./DBschema');


var Products = products.Products;

    exports.ioConn = function() {
        io.on('connection', function (socket) {
            Products.find({"name":"Laptop"}, function(err, result) {
                if (err) throw err;
                io.emit("show products", result);
            });

        });
    }

exports.addProduct = function(doc) {
    doc.save(function (err) {
        if (err) throw err;
        console.log("Product added successfully");
    });
}

