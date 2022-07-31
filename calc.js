function add(num1, num2){
    console.log(num1 + num2);
    return num1 + num2;
}

function subtract(num1, num2){
    console.log(num1 - num2);
    return num1 - num2;
}

function multiply(num1, num2){
    console.log(num1 * num2);
    return num1 * num2;
}

function divide(num1, num2){
    console.log(num1 / num2);
    return num1 / num2;
}

function operate(symbol, num1, num2){
    switch(symbol){
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
        default:
            break;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');

numberButtons.forEach(button => {
    button.addEventListener('click', event => {
        
    })
});

