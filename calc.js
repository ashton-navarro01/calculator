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
    const screen = document.getElementById("screen");
    screen.value = "0";
}

function selectNum(number){
    const screen = document.getElementById("screen");
    if(screen.value == 0){
        screen.value = "";
    }
    screen.value += number;
}

function selectOp(op){
    const screen = document.getElementById("screen");
    numOne = screen.value
    if(containsOp(screen.value)) {
        return;
    } else {
        screen.value += op
        operator = op 
    }
}

function containsOp(str) {
    return ['+', '-', '*', '/'].some(op => str.includes(op));
}

function calculate() {
    const screen = document.getElementById("screen");
    numTwo = screen.value.split(operator).at(-1);
    result = operate(operator, +numOne, +numTwo)
    screen.value = result;
}