let startTime, updatedTime, difference, tInterval;

const time = document.querySelector(".time")
let running = false;

function start() {
    if (!running) {
        startTime = new Date().getTime();
        updatedTime = startTime;
        difference = 0
        tInterval = setInterval(showtime, 10);
        running = true;
    }

}
function stop() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }

}

function reset() {
    clearInterval(tInterval);
    time.textContent = "00 : 00 : 00 : 000";
    running = false;
}
function showtime() {

    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let seconds = Math.floor(difference / 1000) % 60;
    let minutes = Math.floor(difference / 60000) % 60;
    let hours = Math.floor(difference / 3600000) % 24;
    let milliseconds = Math.floor(difference % 1000);

    if (hours < 10) {
        // hours = hours - 12;
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (milliseconds < 10) {
        milliseconds = "00" + milliseconds;
    }
    time.textContent = hours + " : " + minutes + " : " + seconds + " : " + milliseconds;
};

document.querySelector(".start").addEventListener("click", start);
document.querySelector(".Stop").addEventListener("click", stop);
document.querySelector(".Reset").addEventListener("click", reset);
