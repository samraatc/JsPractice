const body = document.querySelector('body');
const weight = document.querySelector('#webkit');
const height = document.querySelector('#height');
const form = document.querySelector('form');



body.style.backgroundColor = "#212121";
body.style.color = '#ffffff'

// form manuplation
form.addEventListener('submit',function(e) {
    e.preventDefault();
    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)
    const result = document.querySelector('#result') 
    
if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
   
}else if(weight < 0 || isNaN(weight) || weight === ''){
    result.innerHTML = `Please give a valid weight ${weight}`;
} else{
    const bmi = weight / Math.pow(height / 100, 2);
    result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
    if(bmi < 18.5){
        result.style.color = '#FF6347'
    }else if(bmi >= 18.5 && bmi < 24.9){
        result.style.color = '#32CD32'
    }else if(bmi >= 25 && bmi < 29.9){
        result.style.color = '#FFD700'
    }else{
        result.style.color = '#FF0000'
    }
}

//   // or in simple way we can write as 
// if (height === '' || height < 0 || isNaN(height)) {
//     result.innerHTML = `Please give a valid height ${height}`;
   
// }else if(weight < 0 || isNaN(weight) || weight === ''){
//     result.innerHTML = `Please give a valid weight ${weight}`;
// } else{
//     const bmi = (weight / (height * height/ 10000)).toFixed(2);
//     result.innerHTML = `Your BMI result is ${bmi}`
// }    

});




