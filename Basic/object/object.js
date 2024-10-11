const symbol = Symbol('S1');
let jsuser = {
    name : 'Samraat',
    "full name" : 'Samraat chaudhary',
    age : 25,
    email : 'samraat@gmail.com',
    address : 'bangalore',
    [symbol] : 'This is a private property',
    isFollow : false
}

// console.log(jsuser);

// console.log(jsuser.symbol); // 
// console.log(jsuser.email);
// console.log(jsuser[symbol])
// console.log(jsuser['email']);
// jsuser.email = 'samraat11@gmail.com';
// console.log(jsuser.email);
// console.log(jsuser['FULL NAME']);
// Object.freeze(jsuser);

// jsuser.name = 'Sam'; // error
// console.log(jsuser.name)


jsuser.greeting = function() {
    console.log('Hello, js user');
}
jsuser.greetingOne = function() {
    console.log(`Hello, js user, ${jsuser["full name"]} good morning`);

}
console.log(jsuser.greeting());
console.log(jsuser.greetingOne());
