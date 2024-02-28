const info = document.getElementById('info');
let working = false;
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';

    const startTimer = (durationInSeconds) => {
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        info.textContent = '';

        const updateDisplay = () => {
            working = true;
            hours = String(Math.floor(durationInSeconds / 3600)).padStart(2, '0');
            minutes = String(Math.floor((durationInSeconds % 3600) / 60)).padStart(2, '0');
            seconds = String(durationInSeconds % 60).padStart(2, '0');

            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;

            if (--durationInSeconds < 0) {
                info.textContent = `Timer ended at: ${new Date().toLocaleDateString()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
                working = false;
                clearInterval(timerInterval);
            }
        };

        updateDisplay();
        const timerInterval = setInterval(updateDisplay, 1000);

        return () => clearInterval(timerInterval);
    };

    let timeValue = 0;

    document.getElementById('time-start').addEventListener('click', () => {
        if (!working) {
            timeValue = parseInt(document.getElementById('time-value').value);

            if (timeValue && timeValue > 0) {
                startTimer(timeValue);
            } else {
                info.textContent = 'The number of seconds must be greater than 0!';
                setTimeout(() => {
                    info.textContent = '';
                }, 4000)
            }
        } else {
            info.textContent = 'Timer is already working!';
            setTimeout(() => {
                info.textContent = '';
            }, 4000);
        }
    });
});