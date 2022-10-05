function get_time() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    var meridian;

    if(hours >= 12) meridian = 'PM';
    else meridian = 'AM';

    document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds;
    document.getElementById('meridian').innerHTML = '(' + meridian + ')';
}

setInterval(get_time, 10);