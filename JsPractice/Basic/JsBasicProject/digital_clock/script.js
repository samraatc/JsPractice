const body = document.querySelector('body');
body.style.backgroundColor = '#212121';
body.style.color = '#ffffff';


const clock = document.querySelector('#clock');
// let date = new Date();
// console.log(date.toLocaleTimeString());  // to test if time zone is working 

setInterval(() => {
    let date = new Date();
    // console.log(date.toLocaleTimeString());  // to test if time zone is working 
    clock.innerHTML = date.toLocaleTimeString();  // to display the real time in the clock

}, 1000);

