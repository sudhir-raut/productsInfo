var http_port = 2222;
var http_ip = '127.0.0.1';

var express = require('express');
var app = express();
var http = require('http').Server(app);
exports.io = require('socket.io')(http);
exports.start = function () {
    http.listen(http_port,function () {
    console.log("Server is listening on ", http_ip, ":", http_port);
    });
}

exports.appInst = function () {
  return app;
};