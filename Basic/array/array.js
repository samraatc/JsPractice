let arr = new Array(1, 2, 3, 4, 5, 6);  // this is the array decleration as object doesn't  need []
let array = [1, 2, 3, 4, 5, 6];
 
// arr.push(7);
// arr.push(8);
// arr.pop();
// arrary.unshift(9);   // unshift is used as push the element in array at the first position of the array
// arrary.shift()      // shift is used as pop the element at the first position of the array
// console.log(arr[1])
// console.log(array.includes(9))  // include is used to search or to identify the elements wethear this element is present or not; it return the value in true and false



// console.log(array);
// console.log(arr);


// let newArray = array.join();

// console.log(newArray);
// console.log(typeof newArray);

//  console.log("length of array",arr.length);  // this will print the length of the array
// console.log("A", array);

// let slice = array.slice(1, 3);
// console.log(slice);


// let splice = array.splice(1, 3);
// console.log("B", array);
// console.log(splice)
// console.log('c', array);




const marvel_hero = ['Thor', 'Ironman', 'Spiderman']
const DC_hero = ['Superman', 'Batman', 'Flash']

// marvel_hero.push(DC_hero);   // this  will push the DC_hero array in the marvel_hero array but whole array is consider as singel  element



// console.log(marvel_hero);

// console.log('the push array is consider as element :-',marvel_hero[3]);

// let all_hero = marvel_hero.concat(DC_hero);  // this will push the DC_hero array in the marvel_hero
// console.log(all_hero);


// const all_new_heros = [...marvel_hero, ...DC_hero];
// console.log(all_new_hero);


// const multi_array_nested = [1, 2, 3, [4, 5, 6], 7, 8, 9, 10,  [11, 12,[1, 2, 3], 13]];   // this array is a nested array

// let all_nested_array = multi_array_nested.flat(Infinity);      // this will remove the nested array and will return the array with all elements

// console.log(all_nested_array);


let name = "bishnu";

console.log(Array.isArray(name));

console.log(Array.from(name));


let sc1 = 100;
let sc2 = 200;
let sc3 = 300;

console.log(Array.of(sc1, sc2, sc3));


