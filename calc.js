// Variables
let numOne;
let numTwo;
let operator;
let result = 0;

// Operations
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(op, a, b){
    switch(op){
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "/":
            return divide(a, b);
        case "*":
            return multiply(a, b);
    }
}

// Calculator logic
function clearScreen(){
    // When pressing clear, clears the screen
    const screen = document.getElementById("screen");
    screen.value = "0";
}

function selectNum(number){
    // Adds the number to the screen
    const screen = document.getElementById("screen");
    if(screen.value == 0){
        screen.value = "";
    }
    screen.value += number;
}

function selectOp(op){
    // Selects the operator, for now only allows one equation at a time
    const screen = document.getElementById("screen");
    if(containsOp(screen.value)) {
        return;
    } else {
        numOne = screen.value
        screen.value += op
        operator = op 
    }
}

function containsOp(str) {
    // Checks if an operator has already been pressed, and if so returns true
    return ['+', '-', '*', '/'].some(op => str.includes(op));
}

function calculate() {
    // Calculates the equation based on the previously chosen numOne and operator, 
    // and manually finds the second number to calculate
    const screen = document.getElementById("screen");
    numTwo = screen.value.split(operator).at(-1);
    result = operate(operator, +numOne, +numTwo)
    screen.value = result;
}