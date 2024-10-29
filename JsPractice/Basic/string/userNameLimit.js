const userName = 'Bishnu Ojhaiya Tharu'; //user name input

// set maxlength and postfix for the string

const maxlength = 5;
const postfix = '...';

let substringUserName;   // set veriable to store the updated username



// check the string length if greater then 5 or not

if (userName.length > maxlength) {


    substringUserName = userName.substring(0, maxlength) + postfix;  // sub string is use 


} else {

    substringUserName = userName + postfix;  // if userName length is less or equal to 5 character than it will print the same name
    
}

console.log(substringUserName);
 