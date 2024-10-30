const changeQuestion = () => {
    document.querySelector("h2").innerHTML = "I am changing this questin";
    document.querySelector("h2").style.color = "red";
    document.querySelector('#strong').style.color = "#0040ff";
    console.log("test", Date.now());
    
// }

// // const Interval = setInterval(changeQuestion, 1000);   // it will change the question color after every 1 sec
// // // clearInterval(Interval);   // it will stop the question color change


// // start button event
// document.querySelector('#start').addEventListener('click', () => {   // this function start the question color change after every 1 sec without button click
//     Interval();
//     console.log("Started");
// });


// // stop button event
// document.querySelector('#stop').addEventListener('click', () => {
//     clearInterval(Interval);
//     console.log("Stoped");
// });   // it will stop the question not to change when button is click before 1 sec




let intervalId; // Define intervalId outside the functions to manage it
 //Start button event
document.querySelector('#start').addEventListener('click', () => {
    if (!intervalId) { // Only start if not already running
        intervalId = setInterval(changeQuestion, 1000); // Start interval
        console.log("Started");
    }
});

//Stop button event
document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervalId); // Clear interval
    intervalId = null; // Reset intervalId to allow restart
    console.log("Stopped");
});
