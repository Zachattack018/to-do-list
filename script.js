const display = document.getElementById('display');

function appendToDisplay(input) {
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = input;
    } else {
        display.innerText += input;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') display.innerText = '0';
}

function calculate() {
    try {
        // eval() takes the string and treats it like a math equation
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}
