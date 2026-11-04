const prompt = require('prompt-sync')();

const name = prompt('Enter your name: ');
console.log(`Hello, ${name}`);

const firstNumber = parseFloat(prompt('Enter a number: '));
const secondNumber = parseFloat(prompt('Enter a number: '));

// Arithmetic operations
const addition = firstNumber + secondNumber;
console.log('Addition:', addition);

const subtraction = firstNumber - secondNumber;
console.log('Subtraction:', subtraction);

const multiplication = firstNumber * secondNumber;
console.log('Multiplication:', multiplication);

if (secondNumber !== 0) {
    const division = firstNumber / secondNumber;
    console.log('Division:', division);
} else {
    console.log('Division cannot be performed by zero.');
}
