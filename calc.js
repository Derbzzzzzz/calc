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
            console.log(symbol);
            return divide(num1, num2);
            break;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equals = document.querySelector('[data-equals]');
const newDisplay = document.querySelector('.newDisplay');
const oldDisplay = document.querySelector('.oldDisplay');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const period = document.querySelector('.period');
let num1 = null;
let num2 = null;
let operator = null;
let temp = false;
let periodSwitch = true;

function periodReset(){
    periodSwitch = true;
    period.addEventListener('click', numberFunction);
}


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

var numberFunction = function(event){
    if(temp == true){
        newDisplay.textContent = '';
        oldDisplay.textContent = '';
        num1 = null;
        num2 = null;
        operator = null;
        temp = false;
    }
    newDisplay.textContent += this.textContent; 

    if(this.textContent == '.'){
        periodSwitch = false;
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', numberFunction);
});

operatorButtons.forEach(button => {
    button.addEventListener('click', event => {
        temp = false;
        if(newDisplay.textContent == '' && oldDisplay.textContent != ''){
            operator = button.textContent
            oldDisplay.textContent = `${num1} ${operator}`;
        } else if(newDisplay.textContent == ''){
            return;
        }else if(operator == null){
            num1 = parseFloat(newDisplay.textContent, 10);
            operator = button.textContent;
            newDisplay.textContent = '';
            oldDisplay.textContent = `${num1} ${operator}`;

            periodReset();

        }  else if(operator != '-' && operator != '*' && operator != '+' && parseFloat(newDisplay.textContent, 10) == 0){
            alert("ERROR: You can't divide by 0! &#x1F606");
            newDisplay.textContent = '';

            periodReset();
        }
        else{
            num2 = parseFloat(newDisplay.textContent, 10);
            num1 = operate(operator, num1, num2);
            num2 = null;
            operator = button.textContent
            oldDisplay.textContent = `${num1} ${operator}`;
            newDisplay.textContent = '';

            periodReset();
        }
    })
});

equals.addEventListener('click', event => {
    if(operator == null || newDisplay.textContent == ''){
        return;
    } else if(operator != '-' && operator != '*' && operator != '+' && parseFloat(newDisplay.textContent, 10) == 0){
        alert("ERROR: You can't divide by 0! &#x1F606");
        newDisplay.textContent = '';
        periodReset();
    }else{
        num2 = parseFloat(newDisplay.textContent, 10);
        oldDisplay.textContent = `${num1} ${operator} ${num2} =`
        num1 = operate(operator, num1, num2);
        num2 = null;
        newDisplay.textContent = num1;
        temp = true;
        operator = null;
        periodReset();
    }
});

period.addEventListener('click', event => {
    console.log(periodSwitch);
    if(periodSwitch == false){
        console.log(periodSwitch);
        period.removeEventListener('click', numberFunction);
    }
});
