// is function act like Object prototype
function multply(num) {
  return num * 5;
}

multply.power = 3;
// console.log(multply(5));
// this below property behave like object so indirectly funtion also behave like object
// console.log(multply.power);
// console.log(multply.prototype.constructor);
// console.log(multply.prototype);    // this property show empty object



// creating constructor function
function createUser(username, score) {
  this.username = username;
  this.score = score;
}


// adding method to the prototype for the above constructor function
// this increament method will increase the score as per the method will be called
createUser.prototype.increment = function () {
  this.score += 3;
  console.log(`New score is ${this.score}`);
};

// adding method to the prototype for the above constructor function
// this printMe method will print the score as it is given in when ever the method is called
createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};

const user1 = new createUser("Samraat", 79);
const user2 = new createUser("Samraat1", 89);

// user1.printMe();
// user2.printMe();

// user1.increment();
// user2.increment();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


//----------------------------------------------------------------Prototype----------------------------------------------------------------


//In JavaScript, prototypes are the mechanism by which objects inherit properties and methods from other objects.
// Every JavaScript object has a prototype, which is another object that the first object inherits from. Using prototypes,
// JavaScript enables an object-oriented programming model where objects can share methods and properties without duplicating them in memory.



// how prototype hericals work
//  ----> this flow is lower level to higher level of prototype inheritance 
// function/Array/string/ so on ---> pass with ---> Object ---> pass with ---> Null to check prototype


let herosDetails = {
  name: 'Hero',
  power: 'Super-Power',
  printPower: function() {
    console.log(`The power of ${this.name} is ${this.power}`);
  }
};

// herosDetails.printPower();   // to test performance of printPower functionality
Object.prototype.extraPowers = function(){
  this.extraPower = 'super Strength';
  console.log(`The extra power of ${this.name} is ${this.extraPower}`);
};

// herosDetails.extraPowers();


let heroes = ['Ironman', 'thor', 'spiderman'];

let heroPowers = {
  ironman: 'super-strength',
  thor: 'lightning-speed',
  spiderman: 'web-slinging', 
  getSpiderPower : function(){
    console.log(`spiderman power is ${this.spiderman}`);
    
  }
}

Object.prototype.power = function(){
  // console.log(`power of ${this.name} is ${this.power}`);
  console.log(`power is given to all the heroes`);
}


// heroes.power();
// heroPowers.power();
Array.prototype.Arraypower = function(){
  console.log('power of array is given to all the elements');
};

// heroes.Arraypower();   // heroPowers.Arraypower is applied to all the elements of the array even newly created arrays
// heroPowers.Arraypower();      // scince object lie on the top of the herical so it passes all its properties to child elements but arrays, functions and  so on are child of object so properties are ignored 



// creating prototype for triming properties, length of string and printing the value

let userName = 'Samraat      ';

String.prototype.AllInOne = function(){
  let trimValue = this.trim();
  console.log(`Length of string is ${this.length}`);
  console.log(`Value of string is ${this}`);
  // console.log(`Length of string is ${this.trim().length}`);
  console.log(`Trimmed string length is ${trimValue.length}`);
  console.log(`Trimmed string is ${trimValue}`);
}

userName.AllInOne();

'Adviser'.AllInOne();

// the above prototype is created for strings using the String keyword so it can be applied to all strings even if the string is newly created
