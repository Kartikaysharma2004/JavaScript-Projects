let displayValue = '0';

function display(value) {
    const display = document.getElementById('display');
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    display.value = displayValue;
}

function clearAll() {
    displayValue = '0';
    document.getElementById('display').value = displayValue;
}

function deleteOne() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    document.getElementById('display').value = displayValue;
}

function addOperator(operator) {
    if (displayValue !== '' && !isNaN(displayValue[displayValue.length - 1])) {
        displayValue += operator;
        document.getElementById('display').value = displayValue;
    }
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('display').value = displayValue;
    } catch {
        document.getElementById('display').value = 'Error';
        displayValue = '0';
    }
}
