//  object 
//-Collection of properties and methods
//-toLowerCase 

//Why use oop

//parts of oop

//Object Literal
// constructor function
// Prototype
// Class
// Intences(new, this)



// Abstraction
// Encapsulation
// Inheritance
// polymorphism

//----------Object Literal------------
// Object literal is a basic unit or object literal is to create a new object
//An object literal in JavaScript is a simple and straightforward way to create an object using curly braces {}. It allows you to define properties and methods directly within the object, making it a quick and convenient way to create an object with specific values.//

const objectName = {
    property1: 'value1',
    property2: 'value2',
    method1: function() {
        // Method logic
    }
};
//write an statement to access the object


const person = {
    name: 'Samraat',
    age: 30,
    isMarried: true,
    greet: function () {
        // console.log(`hello ${name}`);   // this will through an error because it doesn't know the value where to access and '.this' method tell about the present context 
        console.log(this);     // this will print all the values of present context

        // console.log(`Hello, my name is ${this.name}`);
    }
};
// person.greet();
// console.log(person.greet());
// console.log(person.name);


const name = 'Alice';
const age = 30;

const person1 = {
    name: 'Samraat', // shorthand for name: name
    age: 30, //
    greet() { // shorthand for greet: function() { ... }
        console.log(`Hello, my name is ${name} and I am ${age} years old.`);   //name and age will use gloable variable. try with 'this.name ' where this method deals with present context and
    }
};
// person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

const employee = {
    name: 'Advisor',
    position: 'Developer',
    contact: {
        email: 'advisor@example.com',
        phone: '123-456-7890'
    },
    message : function() {
        console.log(`Hello, I am  ${this.name} and my email is ${this.contact.email}`);  // 'this.contact.email' will use present context and
    }
};

// console.log(employee.contact.email); // Output: advisor@example.com
// console.log(employee.message());

// ---------------------------------Dynamic Properties----------------------------------------------------
// ES6 introduced computed property names, allowing you to set property names dynamically.

const propName = 'job';   // value can be assigned dynamically here
const user = {
    name: 'Alice',
    [propName]: 'Engineer' // property name is set dynamically
};

console.log(user.job); // Output: Engineer


//----------Constructor Function------------


// syntex of the constructor

function ConstructorName(parameters) {
    // Initialize properties
    this.property1 = 'value1';
    this.property2 = 'value2';

    // Method
    this.method = function() {
        // Method logic
    };
}

function Person(name, age) {    // constructor function to set the properties for 'new instance' of Person
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log(this);
    };
}

//Creating instances with new keyword that prevent from being overwritten
const person11 = new Person('Samraat', 30);      // new will create a empty object for the new instance 
const person12 = new Person('Adviser', 25);

// person11.greet(); // Output: Hello, my name is Samraat and I am 30 years old.
// person12.greet(); // Output: Hello, my name is Adviser and I am 25 years old.


function Details(name, age, address){
    this.name = name;
    this.age = age;
    this.address = address;
    return this;    // return this will return a new instance all properties of the constructor
}
const Adviser = new Details('Adviser', 26, 'KTM');
const Bishnu = new Details('Bishnu', 26, 'Bangalore');

console.log(Adviser);
console.log(Bishnu);

// Creating instances this instance will be overwritten by the existing new instances
const Adviser11 =  Details('Adviser11', 26, 'KTM');
const Bishnu11 =  Details('Bishnu11', 26, 'Bangalore');
console.log(Adviser11);     // the output will be overwritten by new instance 


//----------------------------------------------------------------type of constructor----------------------------------------------------------------

//1. Basic Constructor Function  = Standard function used with new.
//2. Parameterized Constructor   = Accepts arguments to initialize properties.
//3. Default Constructor         = Provided by default when no constructor is defined in a class.
//4. Copy Constructor            = Duplicates an existing object’s properties.
//5. Constructor with Prototypes = Defines shared methods in the prototype.
//6. ES6 Class Constructor       = Uses class syntax with constructor for better readability.
//7. Singleton Constructor       = Ensures only one instance of an object is created.



//----------------------------------------------------------------Prototype----------------------------------------------------------------
//In JavaScript, prototypes are the mechanism by which objects inherit properties and methods from other objects. Every JavaScript object has a prototype, which is another object that the first object inherits from. Using prototypes,
// JavaScript enables an object-oriented programming model where objects can share methods and properties without duplicating them in memory.


//----------------------Types of prototype------------------------


//In JavaScript, prototypes are primarily used for object inheritance and method sharing. While the prototype system itself is not divided into types per se, 
//n JavaScript, prototypes are primarily used for object inheritance and method sharing. While the prototype system itself is not divided into types per se, we can classify the ways prototypes are used and the types of prototype-based inheritance patterns.

// JavaScript prototypes can be organized as:

// Object Prototype             : The top of the prototype chain (Object.prototype).
// Constructor Prototype        : The prototype property on constructor functions.
// Prototype Chain              : Chain of prototypes up to Object.prototype.
// Prototype Inheritance        : Enables inheritance among objects and constructors.
// Instance Prototype           : Prototype link on object instances.
// ES6 Class Prototype          : Simplifies inheritance with class and extends.
// Prototype Methods            : Common utility methods on prototypes like .map(), .filter(), .toString(), etc.


