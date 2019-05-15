var minutesLabel = document.getElementById('minutes');
var secondsLabel = document.getElementById('seconds');
var totalSeconds = 0;
setInterval(stopWatch, 1000);

function stopWatch() {
    ++totalSeconds;
    secondsLabel.innerHTML = time(totalSeconds % 60);
    minutesLabel.innerHTML = time(parseInt(totalSeconds / 60));
}

function time(time) {
    var timeString = time + '';
    if(timeString.length < 2) {
        return '0' + timeString;
    } else {
        return timeString;
    }
}

export default time;
