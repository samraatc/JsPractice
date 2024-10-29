//  function test(){
//     console.log('Hello World');
//  }
//  test();



//  function add(num1,num2){
//     console.log(num1 + num2);
//  }

//  const result = add(10, 20);
//  console.log(result);
 
//  function add(num1,num2){
//     let result =  num1 + num2;
//     return result;
//     console.log('samraat');    // after the return statement no any further exution is possible so this console will not work
//  }

//  const result = add(10, 20);
//  console.log('result : ',result);
 


// function logInUserMessage(userName) {
//     let UserName = `${userName} just logged`;
//     return UserName;
// }


// const loggedUser = logInUserMessage('Samraat');
 
// console.log(loggedUser);



// function logInUserMessage(userName) {
//     if (!userName){                              // if the userName is empty then it exicute the console 
//         console.log('please enter Your Name');
//         return}

//     let UserName = `${userName} just logged`;
//     return UserName;
// }



// const loggedUser = logInUserMessage('Samraat');
 
// console.log(loggedUser);



// function logmsg(userFullName){
//     if (!userFullName){

//         let error = console.log('Enter Your Name Please')
//         return error;
//     }
//        console.log(`welcome ${userFullName} you are logged in`);
// }


// const loggedmsg = logmsg('');

// console.log(loggedmsg);




function test(...num1) {       // the three dot separated and rest the value so all the numbers are rested into a singal array 
    return num1
}

// console.log(test(1,2,3,4,5,6,7));




//-------------------------------------Object in Function -------------------------------------//

const user ={
    userName : 'Samraat',
    age : 25
}

function userDetails(user){
    console.log(`Mr.${user.userName} yor Age is ${user.age}`);
}

// userDetails(user);




//-----------------------------Array in Function --------------------------------



const numbers = [1,2,3,4,5,6,7,8,];



function secondArray(array) {
    return array[1];

}

console.log(secondArray(numbers))



