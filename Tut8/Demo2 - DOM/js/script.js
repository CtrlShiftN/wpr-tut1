let firstNumber, secondNumber;
let firstNumberInput = document.getElementById('firstNumber');
let secondNumberInput = document.getElementById('secondNumber');
let addBtn = document.getElementById('addBtn');
let subtractBtn = document.getElementById('subtractBtn');
let multipleBtn = document.getElementById('multipleBtn');
let divBtn = document.getElementById('divBtn');
let result = document.getElementById('result');

function getNumbers() {
    firstNumber = parseFloat(firstNumberInput.value);
    secondNumber = parseFloat(secondNumberInput.value);
}

addBtn.addEventListener('click', function () {
    event.preventDefault();
    getNumbers();
    result.innerText = 'Result Addition: ' + (firstNumber + secondNumber);
});

subtractBtn.addEventListener('click', function () {
    event.preventDefault();
    getNumbers();
    result.innerText = 'Result Subtraction: ' + (firstNumber - secondNumber);
});
multipleBtn.addEventListener('click', function () {
    event.preventDefault();
    getNumbers();
    result.innerText = 'Result Multiplication: ' + (firstNumber * secondNumber);
});
divBtn.addEventListener('click', function () {
    event.preventDefault();
    getNumbers();
    result.innerText = 'Result Division: ' + (firstNumber / secondNumber);
});