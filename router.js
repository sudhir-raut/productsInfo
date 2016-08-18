var url = require('url');
var fs = require('fs');

exports.get = function (req,res) {
    fs.readFile('login.html', function (err, data) {
        if (err) {
            res.writeHead(404);
            res.writeHead("Something is going wrong!!!");
        }
        else {
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write(data, "utf-8");
        }
    });

/*    req.requrl = url.parse(req.url, true);
    var path = req.requrl.pathname;
    console.log(path);
*/

}