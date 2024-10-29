const body = document.querySelector('body');
body.style.backgroundColor = '#414141';
body.style.color = '#ffffff';


// to list out the events name and its property
const button = document.getElementById('click');
button.addEventListener('click', (e) => {
   console.log(e);
});
     

// the below code is for mouseover and mouseout event and the propragration property
const ul = document.querySelector('.ul');
ul.addEventListener('click', (e) => {
   console.log("ul clicked");
}, false /*true*/);     // true and false are used for capturing and bubbling.

const a1 = document.querySelector('#a1');
a1.addEventListener('click', (e) => {
   console.log("li clicked");
}, false /*true*/);

const a2 = document.querySelector('#a2');
a2.addEventListener('click', (e) => {
   console.log("li clicked");
   e.stopPropagation();  // stopPropagation is used to stop the event bubbling.
}, false /*true*/);

const a3 = document.querySelector('#a3');
a3.addEventListener('click', (e) => {
   console.log("li clicked");
   e.stopPropagation();  // stopPropagation is used to stop the event bubbling.
}, false /*true*/);




// to prevent the default behaviour of the event

const google = document.querySelector('#google');
// google.addEventListener('click', (e) => {
//    console.log("google clicked");
//    e.preventDefault();  // preventDefault is used to stop the default behaviour of the event
//    e.stopPropagation(); // stopPropagation is used to stop the event bubbling.

// }, false /*true*/);


google.addEventListener('click', (e) => {
   console.log('google clicked');
   e.preventDefault('');
   e.stopPropagation(); // stopPropagation is used to stop the event bubbling.
})

ul.addEventListener('click', (e) => {
   // console.log(e);
   // console.log('target ot the element', e.target);
   // console.log(' this is a node name of element : ', e.target.nodeName);
   // console.log('this is a parant Node ', e.target.parentNode);  
   //  console.log(e.target.tagName);   // this will give the tag name of the element.
       

   if (e.target.tagName === 'IMG') {
      console.log(e.target.id);
      let removeIt = e.target.parentNode;
      removeIt.remove();
   }
   // console.log(e.target.tagName);
   // let removeIt = e.target.parentNode;
   // removeIt.remove();   //this will remove the li element from the ul.
   // removeIt.parentNode.removeChild(removeIt);// this will also remove the li(parent) element from the ul.
}, false /*true*/);
