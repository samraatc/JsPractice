const userMail = "samraat.ai";     // string value is consider as the true so the console is exucated


if (userMail){
     console.log("Got user Mail");
    // const [domain, subDomain] = userMail.split('.');
    // console.log(`Domain: ${domain}`);
    // console.log(`Subdomain: ${subDomain}`);
}else {
    console.log("No user mail provided");
}


const usermail1 = "";        // empty string value is consider as the false so the console is exucated second statement but empty array is consider as the true
if (usermail1){
    console.log("Got user Mail");
   // const [domain, subDomain] = userMail.split('.');
   // console.log(`Domain: ${domain}`);
   // console.log(`Subdomain: ${subDomain}`);
}else {
   console.log("No user mail provided");
}


// falsy value are 

// 1. false
// 2. zero (0) , -0, bigInt 0n. "", null, undefine, NaN


// truthy value are
//1. true
// 2. [], {}, function(){}, and all the string inside the  double quotes example "0", " ", "false"



//-----------------------how to detect the [] and {} is empty or not-------------------------------

const userObj = {};

if (Object.keys(userObj).length === 0 && userObj.constructor === Object) {
    console.log("User object is empty");
} else {
    console.log("User object is not empty");
}


if (Object.keys(userObj).length === 0){
    console.log("the Object is enpty");
}else {
    console.log("the Object is enpty");
}



const array = [];
if (array.length === 0){
    console.log("array is empty");
    
}
else{
    console.log("array is not empty");
    
}


// nullish coalescing operator (??): null and undefined


let value;
let value1;
let value2;
let value3;

value = 5 ?? 10;
value1 = null ?? 10;
value2 = undefined ?? 10;
value3 = null ?? 10 ?? 15;

console.log('value result',value); // Output: 5
console.log('value1 resut',value1); // output:  10

console.log('value2 resut',value2); // output: 10





//------------------------------------terniary  operator-------------------------------------

// Syntex
// condition ? true statement  : false statement

let temp = 40;

let result = temp > 50? 'temp is greater than 50' : 'temp is less than 50';

console.log(result); // Output: temp is less than 50



let iceteaPrice = 100;
iceteaPrice <= 80 ? console.log("icetea price is greater than 80") : console.log('iceteaPrice is lessthan 80')
