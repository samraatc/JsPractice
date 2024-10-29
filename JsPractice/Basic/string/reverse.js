// Original number
const number = 12345;

// Step 1: Convert the number to a string
const numberStr = number.toString();

// Step 2: Reverse the string
const reversedStr = numberStr.split('').reverse().join('');

// Step 3: Convert the reversed string back to a number
const reversedNumber = parseInt(reversedStr, 10);

console.log(reversedNumber); // Output: 54321
