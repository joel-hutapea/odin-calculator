let firstNum = 0;
let secondNum = 0;
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
            return add(a, b)
    
        case "subtract":
            return subtract(a, b)

        case "multiply":
            return multiply(a, b)

        case "divide":
            return divide(a, b)
    }
}