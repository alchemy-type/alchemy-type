let minutesLabel = document.getElementById('minutes');
let secondsLabel = document.getElementById('seconds');
let totalSeconds = 0;


// set interval is not very good timer.
// set an initial date time
let start = null;
function reset() {
    start = new Date();
}

function stopWatch() {
    const end = new Date();
    const elapsed = end - start;
    const totalSeconds = Math.floor(elapsed / 1000);
    minutesLabel.innerHTML = time(Math.floor(totalSeconds / 60));
    secondsLabel.innerHTML = time(totalSeconds % 60);
}

function time(time) {

    // return time.toString().padStart(2, '0');

    var timeString = time + '';
    if(timeString.length < 2) {
        return '0' + timeString;
    } else {
        return timeString;
    }
}

export { stopWatch, reset, totalSeconds };