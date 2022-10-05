function get_answer() {
    let a = document.getElementById('valx').value;
    let b = document.getElementById('valy').value;

    let answer = Number(a) + Number(b);

    document.getElementById('ans').innerHTML = 'Answer : ' + answer;
}

setInterval(get_answer, 10);