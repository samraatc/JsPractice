   const body = document.querySelector('body');
body.style.backgroundColor = '#212121';
body.style.color = '#ffffff';



let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);    // it test the random number

const submit = document.querySelector('#submit');
const userguess = document.querySelector('#guessFiels');
const guessSlot = document.querySelector('.PreviousGuess');  // it hold all the Previous Guesses
const guessCount = document.querySelector('.guessCount');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resulDisplay');

const p = document.createElement('p');

let guessCountNumber = 1;
let previousGuess = [];

let playGame = true;

if (playGame) {
   submit.addEventListener('click', (e) => {
      e.preventDefault();
      const userinput = parseInt(userguess.value);
    //   console.log(userinput);    // check if user input is a number
      validateUserGuess(userinput);
   });
}

function validateUserGuess(userinput) {
    // validation for user input number weather it is valid number or not
    if (isNaN(userinput)) {
        alert('Please enter a Valid number');
    } else if (userinput < 1 || userinput > 100) {
        alert('Please enter a number between 1 to 100');
    }else {
        previousGuess.push(userinput);
        // console.log(previousGuess);    // check if user input is pushed in the array or not
        if (guessCountNumber === 10){
            displayGuesses(userinput);
            displayMessage(`Game Over! You Lost! The Number was ${randomNumber}`);
            endGame();
        }else {
            displayGuesses(userinput);
            checkUserGuessuser(userinput);
            
        }
        // 
    }
};

function checkUserGuessuser(userinput) {
    // checkUserGuess is used to check if user input is right or wrong or equel to random number
    if (userinput === randomNumber) {
        displayMessage(`You Got it Right! The Number was ${randomNumber}`); 
        endGame();
    }else if (userinput > randomNumber) {
        displayMessage(`Your Guess is too Higher than`);
        // lowOrHi.textContent = 'Your Guess is Higher than the Number';
    }else if (userinput < randomNumber) {
        displayMessage(`Your Guess is too Lower than`);
        // lowOrHi.textContent = 'Your Guess is Lower than the Number';
    }


};


function displayGuesses(guess){
    // it wipes all the previous guess from guessSlot and display the new guess
    userguess.value = '';
    guessSlot.innerHTML += `${guess}, `;

    guessCountNumber++;
   const guesscount = guessCount.innerHTML = `${11 - guessCountNumber}`;
    // console.log(guesscount);    //to test the guess count number
    
};

function displayMessage(message){
    //Display the alert message to the user
    lowOrHi.innerHTML = `<h2>${message}</h2>`
    
};

function endGame(){
    // End the game when the user is wrong or correct
    userguess.value = '';
    userguess.setAttribute('disabled','');
    playGame = false;
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start again </h2>`;
    startOver.appendChild(p);
    newGame();
};

function newGame(){
    // when the user press the new game button the game start again
    const startNewGame = document.querySelector("#newGame");
    startNewGame.addEventListener('click', function(e){
       
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuess = [];
        guessCountNumber = 1;
        guessSlot.innerHTML = '';
        guessCount.innerHTML = `${11-guessCountNumber}`;
        userguess.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
};



