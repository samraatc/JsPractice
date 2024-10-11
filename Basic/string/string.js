const Name = "Bishnu";
const RepoCount = 50;

// ` ` is the string plorization 

// console.log(`My name is ${Name} and my repo count is ${RepoCount}`);

// const GameName = new String("Samraat");   // Other way to declear new string

// console.log(`My game name is ${GameName}`); 
// console.log(GameName.__proto__); // this string show the object 
// console.log(GameName[1]);   // this console show the string at its index value

// console.log(typeof GameName);

// console.log(GameName); // since the given string is an object

// console.log(GameName.length); // since the given string is an object we can access all the prototype methods like length, toUperCase etc

// console.log(GameName.toUpperCase()); // simply we can use the charAt() to see the index value and indexOf() to see the char at that index

// const newstring = "Samraat";
// const substring = newstring.substring(0, 4);
// console.log(substring);
// const slice = newstring.slice(0, 4);
// const slice1 = newstring.slice(-8, 4);
// console.log(slice);



const url = "http://samraat.com/samraat%20Chaudhary";
console.log(url);

const useable = url.replace('%20', '-');
console.log(useable);
// or we can use 
console.log(url.replace('%20','_'));

console.log(url.includes('bishnu'));

console.log(url.includes('sam'));

