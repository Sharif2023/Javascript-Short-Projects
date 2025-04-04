// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function calculatePercentage() {
    let display = document.getElementById('display');
    display.value = parseFloat(display.value) / 100; // Convert to percentage
}

function calculateSquareRoot() {
    let display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value)); // Calculate square root
}

function appendToDisplay(value) {
    document.getElementById('display').value += value; // Append value to input
}

function clearDisplay() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove the last character
}

function clearAll() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}