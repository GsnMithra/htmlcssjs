
var myHeaders = new Headers();
myHeaders.append("apikey", "C0F6Cuyq7YdgU6hHr0RSgM49yHZdVctd");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

function putValue (answer, toValue) {
    const obj = JSON.parse(answer);
    document.getElementById('answer').innerText = "Converted value: " + obj.result.toFixed(2) + " " + toValue;
}

function getAnswer () {
    var fromValue = document.querySelector('.from').value;
    var toValue = document.querySelector('.to').value;
    var inputValue = document.querySelector('#fromCurrency').value;
    
    fetch("https://api.apilayer.com/exchangerates_data/convert?to=" + toValue +"&" + "from=" + fromValue + "&amount=" + inputValue, requestOptions)
        .then(response => response.text())
        .then(result => putValue(result))
        .catch(error => console.log('error', error));
}
