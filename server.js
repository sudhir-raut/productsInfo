var http_port = 2020;
var http_ip = '127.0.0.1';

var express = require('express');
var app = express();
var http = require('http').Server(app);

exports.start = function () {
   /* var server = http.createServer(function (req, res) {
    require('./router').get(req,res);
    });
*/
    http.listen(http_port,function () {
    console.log("Server is listening on ", http_ip, ":", http_port);
    });
}

exports.appInst = function () {
  return app;
};