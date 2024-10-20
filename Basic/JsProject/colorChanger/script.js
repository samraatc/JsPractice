


let bg = document.querySelector('.bg-black');
bg.style.backgroundColor = '#212121';
bg.style.color = '#ffffff';

const buttons = document.querySelectorAll('.button');
// console.log(buttons);  // print the buttons list

buttons.forEach(function (button){
    // console.log(button);
    button.addEventListener('click', function (e) {
        // console.log(e);          // it will print the event on click
        // console.log(e.target);  // it print the target  button or element 
        if (e.target.id === 'Red'){
            bg.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'Blue'){
            bg.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'Maroon'){
            bg.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'Gray'){
            bg.style.backgroundColor = e.target.id;
        }
    })
})


