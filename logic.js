const screen = document.querySelector('#screen');
const clearButton = document.querySelector('#clear-button');
const backspaceButton = document.querySelector('#backspace-button');
const divideButton = document.querySelector('#divide-button');
const multiplyButton = document.querySelector('#multiply-button');
const subtractButton = document.querySelector('#subtract-button');
const addButton = document.querySelector('#add-button');
const equalsButton = document.querySelector('#equals-button');
const dotButton = document.querySelector('#dot-button');
const zeroButton = document.querySelector('#zero-button');
const oneButton = document.querySelector('#one-button');
const twoButton = document.querySelector('#two-button');
const threeButton = document.querySelector('#three-button');
const fourButton = document.querySelector('#four-button');
const fiveButton = document.querySelector('#five-button');
const sixButton = document.querySelector('#six-button');
const sevenButton = document.querySelector('#seven-button');
const eightButton = document.querySelector('#eight-button');
const nineButton = document.querySelector('#nine-button');

clearButton.addEventListener("click", clearButtonPressed);
backspaceButton.addEventListener("click", backspaceButtonPressed);
divideButton.addEventListener("click", divideButtonPressed);
multiplyButton.addEventListener("click", multiplyButtonPressed);
subtractButton.addEventListener("click", subtractButtonPressed);
addButton.addEventListener("click", addButtonPressed);
equalsButton.addEventListener("click", equalsButtonPressed);
dotButton.addEventListener("click", dotButtonPressed);
zeroButton.addEventListener("click", zeroButtonPressed);
oneButton.addEventListener("click", oneButtonPressed);
twoButton.addEventListener("click", twoButtonPressed);
threeButton.addEventListener("click", threeButtonPressed);
fourButton.addEventListener("click", fourButtonPressed);
fiveButton.addEventListener("click", fiveButtonPressed);
sixButton.addEventListener("click", sixButtonPressed);
sevenButton.addEventListener("click", sevenButtonPressed);
eightButton.addEventListener("click", eightButtonPressed);
nineButton.addEventListener("click", nineButtonPressed);

let firstNum = "";
let secondNum = "";
let operator = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case "add":
            return add(a, b);
    
        case "subtract":
            return subtract(a, b);

        case "multiply":
            return multiply(a, b);

        case "divide":
            return divide(a, b);
    }
}

function updateDisplay(num) {
    if (num) {
        if (!operator) {
            if (!(num === "." && firstNum.includes("."))) {
                firstNum += num;
            }
        } else {
            if (secondNum === "0") secondNum = ""
            if (!(num === "." && secondNum.includes("."))) {
                secondNum += num;
            }
        }
    }

    if (!firstNum) {
        screen.textContent = "0";
    } else if (secondNum) {
        screen.textContent = secondNum;
    } else {
        screen.textContent = firstNum;
    }
}

function handleOperator(sign) {
    if (!firstNum) firstNum = "0";
    if (secondNum) equalsButtonPressed();
    operator = sign;
}

function clearButtonPressed() {
    firstNum = "";
    secondNum = "";
    operator = "";
    updateDisplay();
}

function backspaceButtonPressed() {
    if (!operator) {
        firstNum = firstNum.slice(0, -1);
    } else {
        secondNum = secondNum.slice(0, -1);
        if (secondNum === "") secondNum = "0";
    }
    updateDisplay()
}

function divideButtonPressed() {
    handleOperator("divide");
}

function multiplyButtonPressed() {
    handleOperator("multiply");
}

function subtractButtonPressed() {
    handleOperator("subtract");
}

function addButtonPressed() {
    handleOperator("add");
}

function equalsButtonPressed() {
    if (secondNum === "0" && operator === "divide") {
        clearButtonPressed();
        screen.textContent = "You broke me :(";
    }
    
    if (firstNum && secondNum && operator) {
        const result = operate(Number(firstNum), Number(secondNum), operator);
        firstNum = String(result);
        operator = "";
        secondNum = "";
        updateDisplay();
    }
}

function dotButtonPressed() {
    updateDisplay(".");
}

function zeroButtonPressed() {
    if (firstNum) {
        updateDisplay("0");
    }
}

function oneButtonPressed() {
    updateDisplay("1");
}

function twoButtonPressed() {
    updateDisplay("2");
}

function threeButtonPressed() {
    updateDisplay("3");
}

function fourButtonPressed() {
    updateDisplay("4");
}

function fiveButtonPressed() {
    updateDisplay("5");
}

function sixButtonPressed() {
    updateDisplay("6");
}

function sevenButtonPressed() {
    updateDisplay("7");
}

function eightButtonPressed() {
    updateDisplay("8");
}

function nineButtonPressed() {
    updateDisplay("9");
}