const user = {
    UserName : "Samraat",
    address : "Nwe York",

    welcomeMessage : function (){
          console.log(`${this.UserName}, welcome to website`);    // this is used for the present scope only
        //  console.log(this);
         
    }
}

// user.welcomeMessage();

// user.UserName = "Ram";    

// user.welcomeMessage();   // this contains the welcome message after the change in UserName as done above

// console.log(user.userName);


// console.log(this);  // it will present the node enveronment


// function one(){
    // console.log(user.userName);
//     console.log(this);   // it will pesent the node enveronment for function 
// }

// one();


const test = () => {
    let userName = "test";
    // console.log(this.userName); 
}

// test();  // it will not present the user.userName because this is a arrow function which doesn't have its own this, it uses the this of the enclosing scope. In this case it will use the global scope.
 

//  () => {}    // this the syntax of the arrow function


// const add = (num1,num2) => {
//     return num1 + num2;
// }



const add = (num1,num2) =>  num1 + num2;   //  or  (num1 + num2)   this is call implecte return

// console.log(add(3,4));


const object = () => ({userName : 'Samraat'}) ;

//  console.log(object());  // it will not create a new object with {} barsh , it will create a new property in the current object. to create an object we use ({}) syntex



