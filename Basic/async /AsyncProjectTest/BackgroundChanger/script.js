let body =  document.querySelector('body');


// Random color generator
const randomColor = () => {
    // return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`; 
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];    // adds a random number from 0 to 15 to the color string for Hex format of color code 
    }
    return color;    // returns color string in # format

};
// console.log(randomColor());    // TO test color generator function 



// Start function to change color of body every second
let IntervalID;
const startCanagingColor = () => {
    if(!IntervalID){             // if there is no interval ID then start interval or insert thye value to interval ID
        IntervalID = setInterval(colorChanger, 1000);  // setInterval(function, time in milliseconds)
        console.log('Started');

    }
    function colorChanger() {
        body.style.backgroundColor = randomColor();
    };
};

// Stop function to stop color changing
const stopCanagingColor = () => {
    clearInterval(IntervalID);
    IntervalID = null;        // it will clean up Or prevents form overliding of interval ID
    console.log('Stopped');
};

document.querySelector('#start').addEventListener('click', startCanagingColor);
document.querySelector('#stop').addEventListener('click', stopCanagingColor);

