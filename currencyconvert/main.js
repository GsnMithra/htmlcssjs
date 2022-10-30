const api = "https://api.exchangerate-api.com/v4/latest/USD";

var value = document.querySelector("#value");
var fromValue = document.querySelector(".from");
var toValue = document.querySelector(".to");

var fromChange;
var toChange;

fromValue.addEventListener('change', (event) => {
    fromChange = `${event.target.value}`;
});

toValue.addEventListener('change', (event) => {
    toChange = `${event.target.value}`;
});

function changeValue (e) {
    
}

value.addEventListener('input', changeValue);