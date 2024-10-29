// var c =300
// let a = 100;

// if (true){
//     let a = 10;
//     const  b = 20;
//     var c = 30;

//     // console.log('inner a ',a);
// }


// console.log('outer a ',a);
// // console.log(b);
// console.log(c);





//------------------------------------nested scope variable --------------------------------





// function one(){
//     const userName = 'Bishnu'
//     function two(){
//         const myWebsite = 'http://example.com';
//         console.log(userName);
//     }
//     // console.log(myWebsite);
//     two();
// }

// one();   // call the function one 







// if (true){
//     const userName = 'samraat';
//     if (userName === 'samraat'){
//         const a = 100;
//         // console.log('inner a ',a);
//         console.log('user name ', userName);

//     }
//     console.log('outer a ',a);
// }
// // console.log(userName);

// console.log('outer a ',a);






if (true) {
    const userName = 'samraat';
    if (userName === 'samraat') {
        const a = 111;
        // console.log('inner a ',a);
        console.log('user name ', userName);  // This will log: 'user name samraat'
    }
    // console.log('outer a ',a);  // Error: 'a' is not defined
}
// console.log(userName);  // Error: 'userName' is not defined

// console.log('outer a ',a);  // Error: 'a' is not defined
