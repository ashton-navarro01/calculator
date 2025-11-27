// Variables
let numOne;
let numTwo;
let operator;
let result = 0;
let error = false; // Can't clear until you let error = false

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
    error = false;
}

function selectNum(number){
    if(error){
        return;
    }
    // Adds the number to the screen
    const screen = document.getElementById("screen");
    if(screen.value == 0){
        screen.value = "";
    }
    screen.value += number;
}

function selectOp(op){
    if(error){
        return;
    }

    const screen = document.getElementById("screen");

    if(endsInOp(screen.value)) {
        // Case 1: Equation ends in an operator -> swap operators
        numOne = screen.value.slice(0, -1);
        operator = op;
        screen.value = numOne + op;
        return;
    }
    else if(containsOp(screen.value)) {
        // Case 2: Equation has an operator in the middle -> calculate then use new value
        let res = calculate();
        numOne = res;
        operator = op;
        screen.value += op;
        return;
    } else {
        // Case 3: Equation has no operator -> simply add it
        numOne = screen.value
        operator = op 
        screen.value += op   
    }
}

function containsOp(str) {
    // Checks if an operator has already been pressed, and if so returns true
    return ['+', '-', '*', '/'].some(op => str.includes(op));
}

function endsInOp(str) {
  const ops = ['+', '-', '*', '/'];
  return ops.includes(str[str.length - 1]);
}


function calculate() {
    // Calculates the equation based on the previously chosen numOne and operator, 
    // and manually finds the second number to calculate
    const screen = document.getElementById("screen");
    numTwo = screen.value.split(operator).at(-1);
    
    if(numTwo == '0' && operator == '/') {
        screen.value = "You can't divide by zero!"
        error = true;
        return;
    }

    result = operate(operator, +numOne, +numTwo)
    screen.value = result;
    return result;
}