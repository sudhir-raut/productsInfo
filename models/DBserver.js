var mongoose = require('mongoose');
exports.dbInst = mongoose.connect('mongodb://localhost/iauro');

    mongoose.connection.on('connected', function () {
        console.log('Mongoose default connection open to ' + 'mongodb://localhost/iauro');
    });

    mongoose.connection.on('error',function (err) {
        console.log('Mongoose default connection error: ' + err);
    });


    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });


    process.on('SIGINT', function() {
        mongoose.connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
        });
    });

