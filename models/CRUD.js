

exports.create = function(doc) {
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