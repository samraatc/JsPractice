const map = new Map();
map.set('IN', "India");
map.set('USA', "USA");
map.set('NP',"Nepal");

// console.log(map);

// for (const key of map) {
//     console.log(key);  
// }

for (const [key , value] of map){     // [] => [key, value] distructure the map values into an array
    // console.log(`${key} : ${value}`);
    // console.log(key, ':-', value);
    
}



let arr = [1, 2, 3, 4, 5, 6];
let i =0;

const newArr = arr.map((num) => num * 2);
// console.log(newArr);

for ( const arrays of newArr){
    console.log(`arrays index is ${i} and the value is ${arrays}`);
    i++;
}



    