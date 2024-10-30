// setTimeOut, clearTimeout, setInterval, clearInterval

// syntex = setTimeout(callback function, delay)


// setTimeout(() => {
//     console.log("Hello samraat");
    
// }, 3000);

// or 
 
// const samraat = function(){
//     console.log("Hello samraat");
// }

// setTimeout(samraat, 3000);


const changeQuestion = () => {
    document.querySelector("h2").innerHTML = "I am changing this questin";
    document.querySelector("h2").style.color = "red";
}

// setTimeout(changeQuestion, 3000);   // it will change the question after 3 sec

const stopQuestionChange = setTimeout(changeQuestion, 3000);

document.querySelector('#stop').addEventListener('click', () => {    // it will stop the question not to change when button is click before 3 sec
    clearTimeout(stopQuestionChange);
    console.log("Stoped");
    
});



