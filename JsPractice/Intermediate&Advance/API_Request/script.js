const body = document.querySelector('body');
body.style.backgroundColor = '#212121'
body.style.color = '#ffffff'



//----------------------------------------------------------------XML API Requests----------------------------------------------------------------

const requestUrl = 'https://api.github.com/users/samraatc'

const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl, true);      
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4 ){ 
        const data = JSON.parse(this.responseText);     // we get response data is on string formate to convrt data object JSON() method is used to convert 
        console.log(data);
        // document.getElementById('name').textContent = data.name;
        // document.getElementById('email').textContent = data.email;
        // document.getElementById('bio').textContent = data.bio;
        console.log(data.name);
        console.log(data.followers);
        console.log(data.id);
    } 
}
xhr.send();




