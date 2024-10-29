// for loop



// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }


// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("Element found at index: ", i);
//     }

//     console.log(element);
    
// }


for (let i =0; i< 10; i++){
    const element = i;
    if (element % 2 == 0){
        console.log("Even number: ", element);
    } else {
        console.log("Odd number: ", element);
    }
}



for (let iceteaPrice = 0; iceteaPrice < 10; iceteaPrice++) {
    const element = iceteaPrice;
    // console.log(element);
    for (let j = 0; j <  10; j++) {
        // console.log(`inner loop for ${j} with loop count: ${iceteaPrice}`)
        
    }
    
}



//-----------------------------for with Break-----------------------------------

// for (let i = 0; i < 10; i++) {
//     if (i == 3){
//         break;
//     }
//     console.log(i);
// }


//-----------------------------for with Continue-----------------------------------

for (let i = 0; i < 10; i++) {
    if (i == 3){
        continue;
    }
    console.log(i);
}




for (let index = 0; index < 5; index++) {
    for (let j = 0; j < 5; j++) {
     console.log(`index = ${index}  j = ${j}`);
         
    }
    
}



const arr = [11,121,31,14,15];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    
}


//-------------------------------for in loop------------------------------------------

// const obj = { a: 1, b: 2, c: 3 };
// for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`);
// }
// // console.log(obj.a);




const objeTest = { a: 1, b: 2, c: 3};

for (let test in objeTest){
    // console.log(test);
    // console.log(objeTest[test]);
    console.log(`${test} : ${objeTest[test]}`)
}



for (let test in objeTest){
    // console.log(test);
    // console.log(objeTest[test]);
    console.log(`index ${test} : value ${objeTest[test]}`)    
}

 




//-------------------------------for of loop------------------------------------------

let ArrTest = [11, 22, 33, 44, 55, 66];

for (let test of ArrTest){
    console.log(test);
    // console.log(`${test}`);
}



let str = "Samraat";
let i = 0;
for (let strings of str){
    // console.log(strings);
    console.log(`${i} : ${strings}`);
    i++;
}




const str1 = "hello";

str1.split("").forEach((char, index) => {
    console.log(`Index: ${index}, Character: ${char}`);
});





//-------------------------------forEach------------------------------------------
