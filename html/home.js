var socket = io.connect("127.0.0.1:2222");

function signin() {
    //window.open('login.html','_self');
    window.onload = function() {
        document.getElementById('openModal').style.display = 'inline';
    }
}

function save() {
    var userName = document.getElementById("newUserName").value;
    var pwd1 = document.getElementById("newpwd1").value;
    var pwd2 = document.getElementById("newpwd2").value;
    if(pwd1 != pwd2)
    {
        alert("Passwords doesn't match!!!");
    }
    else{
        socket.emit("add user",userName,pwd1);
        userName = '';
        pwd1 = '';
        pwd2 = '';
    }

}

socket.on("alert",function(msg){
    alert(msg);
});
function productInfo(){

}
socket.on("show products",function(products){
    for( var i = 0; i<products.length; i++) {
        document.getElementById('productInfo').innerHTML = ("<div class='product'>" + "<a onclick='productInfo("+products[i]._id+")'><img height='40' width='40' src='"+products[i].imgUrl+"'/> <span id ='id" + i + "'>" + products[i].name + "</span></a></div>" + document.getElementById("productInfo").innerHTML);
    }
});