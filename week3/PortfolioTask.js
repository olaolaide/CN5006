const prompt = require('prompt-sync')();

// 1. Accept user details
const fullName = prompt('Enter your full name: ');
const studentID = prompt('Enter your student ID: ');
const groupNumber = prompt('Enter your lab group number: ');

// Display user details
console.log('\n--- Student Details ---');
console.log('Full Name: ' + fullName);
console.log('Student ID: ' + studentID);
console.log('Lab Group Number: ' + groupNumber);

// 2. Display current date and time
const currentDateTime = new Date();
console.log('Current Date and Time: ' + currentDateTime.toLocaleString());

// 3 Arrow function that displays favourite programming language.
const displayFavouriteLanguage = () => {
    console.log('Javascript')
}

displayFavouriteLanguage();

// 4 Calculates a unique value using your Student ID: U309 4683

const uniqueValueByStudentId = () => {
    // Retrieve the last four digits
    let lastFourDigits = studentID.slice(-4)
    // Error check on wrong student ID
    if (lastFourDigits.length !== 4) {
        console.log('Please enter a Student ID containing at least 4 digits.');
        return;
    }
    let sum = 0;

    // Loop the array and sum
    for (let index = 0; index < lastFourDigits.length; index++) {
        sum += parseInt(lastFourDigits[index], 10);
    }

    console.log('Verification Number: ' + sum);
}

uniqueValueByStudentId();
