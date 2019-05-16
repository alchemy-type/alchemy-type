function calcWPM(emptyArray, totalSeconds) {
    const words = emptyArray.length / 5.1;
    const time = totalSeconds / 60;
    const wpm = parseInt(words / time);

    return wpm;
}

export default calcWPM;