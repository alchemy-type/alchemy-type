let minutesLabel = document.getElementById('minutes');
let secondsLabel = document.getElementById('seconds');
let totalSeconds = 0;

function reset() {
    totalSeconds = 0;
}

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

export { stopWatch, reset };