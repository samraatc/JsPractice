document.querySelector("body").style.backgroundColor = "black";
document.querySelector("body").style.color = "white";
const container = document.querySelector('.container');


const insert = document.querySelector('#insert');
window.addEventListener('keydown', function (e) {
    insert.innerHTML = `
     <div class="color">
        <table>
            <tr>
                <th>key</th>
                <th>key-code</th>
                <th>code</th>
            </tr>
            <tr>
                <td>${e.key === " " ? 'space' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>


     </div>
    `
});

