let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        timer = setInterval(updateTimer, 10);
        isRunning = true;
        document.getElementById('start').textContent = 'Pause';
        document.getElementById('save').disabled = false;
    } else {
        clearInterval(timer);
        isRunning = false;
        document.getElementById('start').textContent = 'Resume';
        document.getElementById('save').disabled = true;
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    document.getElementById('start').textContent = 'Start';
    document.getElementById('measurements').innerHTML = '';
    document.getElementById('save').disabled = true;
}

function updateTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('hours').textContent = padTime(hours);
    document.getElementById('minutes').textContent = padTime(minutes);
    document.getElementById('seconds').textContent = padTime(seconds);
    document.getElementById('milliseconds').textContent = padTime(milliseconds);
}

function padTime(time) {
    return time < 10 ? `0${time}` : time;
}

function saveMeasurement() {
    const measurements = document.getElementById('measurements');
    if (measurements.getElementsByTagName('li').length < 10) {
        const item = document.createElement('li');
        item.textContent = `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}.${padTime(milliseconds)}`;
        measurements.appendChild(item);
    }
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('save').addEventListener('click', saveMeasurement);
