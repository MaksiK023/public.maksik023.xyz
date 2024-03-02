let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendDigit(digit) {
    display.value += digit;
}

function appendOperator(operator) {
    display.value += operator;
}

function appendDot() {
    if (display.value.indexOf('.') === -1) {
        display.value += '.';
    }
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePercentage() {
    return;
    /* try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = 'Error';
    } */
}
