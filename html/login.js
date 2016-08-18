var socket = io.connect("127.0.0.1:2222");
var userName;
var password;
function signup(){
    //socket.emit("sign up");
    window.open('signup.html','_self');
}

window.onload = function () {
    document.getElementById("pwd").addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            document.getElementById("btn").click();
        }
    });
}

function login() {
    userName = document.getElementById("username").value;
    password = document.getElementById("pwd").value;
    socket.emit("login", userName, password);
}
