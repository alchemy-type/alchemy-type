function calcWPM(count, totalSeconds) {
    const words = count / 5.1;
    const time = totalSeconds / 60;
    const wpm = parseInt(words / time);

    return wpm;
}

export default calcWPM;