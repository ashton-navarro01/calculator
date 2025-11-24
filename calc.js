// Variables
let numOne;
let numTwo;
let operator;

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

function selectNum(number){
    const screen = document.getElementById("screen");
    if(screen.value == 0){
        screen.value = "";
    }
    screen.value += number;
}

function clearScreen(){
    const screen = document.getElementById("screen");
    screen.value = "";
}