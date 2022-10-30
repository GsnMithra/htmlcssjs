function showPassword() {
    var getPassword = document.getElementById('loginPasswd');
    if (getPassword.type === "password") {
        getPassword.type = "text";
    } else {
        getPassword.type = "password";
    }
}

function getEntries() {
    var getPasswd = document.getElementById('newPassword');
    var getRepeatedPasswd = document.getElementById('confirmNewPassword');

    if(getPasswd.type === 'password') { getPasswd.type = 'text' }
    else { getPasswd.type = 'password'; }

    if(getRepeatedPasswd.type === 'password') { getRepeatedPasswd.type = 'text' }
    else { getRepeatedPasswd.type = 'password'; }
}

var passwd = document.getElementById('newPassword').value;
var cpasswd = document.getElementById('confirmNewPassword').value;

function checkSame() {
    
}

setInterval(checkSame, 10);

// function registerUser() {
//     var fname = document.getElementById('validationDefault01').innerText;
//     var lname = document.getElementById('validationDefault02').innerText;


// }