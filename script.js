const screen = document.querySelector(".screen");
const buttons = document.querySelector(".buttons");

let currInput = "";
let operand1 = "";
let operand2 = "";
let operator = "";
let result = "";


function calculate(operand1, operator, operand2) {
    operand1 = Number(operand1);
    operand2 = Number(operand2);
    if(operator == '+') {
        return operand1 + operand2;
    } else if (operator == '-') {
        return operand1 - operand2;
    } else if (operator == '/') {
        if(operand2 === 0) {
            return "Error: Can't Divide By 0";
        }
        return operand1 / operand2;
    } else if (operator == "*") {
        return operand1 * operand2;
    }
}

buttons.addEventListener("click", function (e) {
    if (!isNaN(e.target.textContent)) {
        if (currInput === "") {
            currInput = e.target.textContent;
        } else {
            currInput += e.target.textContent;
        }
        screen.textContent = currInput;
    } else if (e.target.textContent === 'CLEAR') {
        screen.textContent = 0;
        currInput = "";
    } else if (e.target.textContent === '←') {
        currInput = currInput.toString().slice(0, -1);
        screen.textContent = currInput || '0';
    } else if (['+', '-', '*', '/'].includes(e.target.textContent)) {
        if((operand1.length != 0 && operator.length != 0) && currInput.length != 0) {
            operand1 = calculate(operand1, operator, currInput);
        } else {
            operand1 = currInput;
        }
        operator = e.target.textContent;
        currInput = "";
        screen.textContent = operand1 + " " + operator;
    } else if (e.target.textContent === '=') {
        operand2 = currInput;
        result = calculate(operand1, operator, operand2);
        screen.textContent = result;
        currInput = result;
    }
});
