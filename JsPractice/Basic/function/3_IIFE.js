// (IIFE) Immediately Invoked Function Expressions

// ( () => {} )(); is the syntex for IIFE functions where (first pramthesis is the function)(and second pramthesis is the exuction function)

(() => {
    console.log('I am a arrow  IIFE function');
})();        // for this function semi-clon is importent other wise it will throw an error


(function () {
    console.log('I am test clasic IIFE function');
})();       // IIFE is used to prevent from gloable variable declarations


((test) => {
    console.log(`I am a arrow  IIFE function to test argument declarations ${test}`);
})('is successfull'); 






//------------------------------------JavaScript Execution Context-------------------------------------------


// JavaScript has two execution contexts: Global and Function.   (eval Execution Context is global Execution Context  )

// {} Execution phases
// 1. memory creation 
//2. execution phase


// call stack


 





