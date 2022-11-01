var schar = document.querySelector('.special');
var upper = document.querySelector('.upper');
var lower = document.querySelector('.lower');
var pass = document.querySelector('#tex2');

var specialChars = "@#$%&?";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "123456789";

lower.checked = true;
upper.checked = true;

function getPassword () {
    var password = "";
    
    var plenth = document.getElementById('ip2').value;
    console.log(plenth);

    for (let i = 0; i < plenth; i++) {
        if (schar.checked) { password += specialChars.charAt(Math.floor(Math.random() * specialChars.length)); }
        if (password.length == plenth) break;
        if (upper.checked) { password += upperCase.charAt(Math.floor(Math.random() * upperCase.length)); }
        if (password.length == plenth) break;
        if (lower.checked) { password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)); }
        if (password.length == plenth) break;
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    pass.innerHTML = "Password : " + password;
}
