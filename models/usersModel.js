
var ioInst = require('/home/web/node-projects/productsInfo/server');
var io = ioInst.io;
var users  = require('./DBschema');


var Users = users.Users;

exports.ioConn = function() {
    io.on('connection', function (socket) {
        socket.on("add user",function(username,password){
            Users.find({"name":username}, function(err, result) {
                if(err) throw err;
                var i;
                for(i = 0; i < result.length; i++){
                    if(result[i].name==username){
                socket.emit("alert","User already exists!!!");
                        break;
                    }
                }
                if(i >= result.length){
                    var user = new Users({
                        name:username,
                        password:password,
                        admin:false
                    });
                   // newUser(user);
                    console.log(user);
                    user.save(function (err) {
                        if (err) throw err;
                        console.log("User saved successfully");
                    });

                }

            });

        });

    });
}



var newUser = function(doc) {
    doc.save(function (err) {
        if (err) throw err;
        console.log("User saved successfully");
    });
}

var read = function(model){
    model.find({}, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
}

var update = function(){

}

var remove = function(){

}