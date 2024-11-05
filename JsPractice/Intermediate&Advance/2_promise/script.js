// syntex of Promise
// const promise = new Promise(function(resolve, reject) {
//   statement for promise
//   resolve/reject()  this method help in consuming the promise or to verify that the promise is completed   
// });   create promise 
// .then(function(){resolve statement that consumes})   this will verify that the promise is resolved 


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise for Async task");

        resolve();   // resolve make connection with .this method   to consume async
    }, 5000);
});



promise.then(function () {
    console.log('Promise Resolved');
})


new Promise(function(resolve, reject){    
    setTimeout(function(){
        console.log('Another Promise for Async task');
        resolve(); 
    },6000)
}).then(function(){
    console.log('Another Promise Resolved');
})


//----------------------------------------------------------------Data parse Through Promise----------------------------------------------------------------

const PromiseData = new Promise(function(resolve, reject){

    // resolve hold data in object and pass to Promise
    resolve({
        name: 'Samraat',
        age: 25,
        job: 'Software Engineer'
    })
});
 
PromiseData.then(function(admin){
    console.log(admin);
    // console.log(`Name: ${admin.name}, Age: ${admin.age}, Job: ${admin.job}`);
})



// ------------------------------------------------------------------Error Handling in Promise------------------------------------------------------------------
const errorHandlerPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true;    // here error can be practice while creating error as 'true' to handle errors and 'false' to relosve error
        if(!error){
            resolve({
                username: "Samraat",
                age: 25,
                job: "Software Engineer"
            })
        }else{
            reject('Error: Something went wrong');
        }
    },.5000)
});



errorHandlerPromise.then(function(admin){    // this method is called as chaining 
    console.log(admin);
    console.log(admin.username);
})
.then(function(username){
    console.log(`Name: ${username}`);
})
.catch(function(error){                      // catch metod hentadl the error 
    console.error(error);
})
.finally(function(){
    console.log('Promise Finished');
});




// ------------------------------------------------------------------Async Await in JavaScript------------------------------------------------------------------


const AsyncPromise = new Promise((relosve, reject) => {
    setTimeout(function(){
        let error = true;  
        if(!error){
            relosve({
                username: "Samraat001",
                age: 25,
                job: "Software Engineer"
            })
        }else{
            reject('Error: Something went wrong JS');
        }
    },2000)
});


async function AsyncResponse() {

    // since async and await does't handle errors itself so whole await function should be wrapped in try/catch block
    // const response = await AsyncPromise   // since in above function error is true it will exucate the reject function that throw an error 
    // console.log(response);

    // try/catch block
    try {
        const response = await AsyncPromise;
        console.log(response);
    } catch (error) {
        console.error(error);
    }
     finally {
        console.log('Async Promise Finished your request is either completed or rejected');
    }

}

// AsyncResponse();



//----------------------------------------------------------------Data parse through async await----------------------------------------------------------------

async function getAllUser() {
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response);     // to test the response 
    
    const data = await response.json();    // any response in async await function that takes time should be use with await function,  here convertion of data from string to object take time so await is used

    console.log(data);
   } catch (error) {
    console.log("Error: Error while fetching the Data");
    
   }
}
// getAllUser();



// by .then function


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();   // response is return to next .then function in object format

})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("Error: Error while fetching the Data");
});

