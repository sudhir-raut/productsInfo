var express = require('express');
var path = require('path');
var html_dir ='/home/web/node-projects/productsInfo/html';
exports.home = function (app) {

    app.use(express.static('/home/web/node-projects/productsInfo/html'));
    app.get('/', function (req, res) {
        res.sendFile(html_dir + '/home.html');
    });
}
