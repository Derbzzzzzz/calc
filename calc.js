function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(symbol, num1, num2){
    switch(symbol){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        default:
            return divide(num1, num2);
            break;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const newDisplay = document.querySelector('.newDisplay');
const oldDisplay = document.querySelector('.oldDisplay');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
let num1 = null;
let num2 = null;
let operator = null;

del.addEventListener('click', event => {
    newDisplay.textContent = newDisplay.textContent.slice(0, newDisplay.textContent.length - 1);
});

clear.addEventListener('click', event => {
    newDisplay.textContent = '';
    oldDisplay.textContent = '';
    num1 = null;
    num2 = null;
    operator = null;
});

numberButtons.forEach(button => {
    button.addEventListener('click', event => {
        newDisplay.textContent += button.textContent;
    })
});

operatorButtons.forEach(button => {
    button.addEventListener('click', event => {
        if(newDisplay.textContent == ''){
            return;
        } else if(operator == null){
            num1 = parseFloat(newDisplay.textContent, 10);
            operator = button.textContent;
            newDisplay.textContent = '';
            oldDisplay.textContent = `${num1} ${operator}`;
        } else{
            num2 = parseFloat(newDisplay.textContent, 10);
            num1 = operate(operator, num1, num2);
            num2 = null;
            operator = button.textContent
            oldDisplay.textContent = `${num1} ${operator}`;
            newDisplay.textContent = '';
        }
    })
});



