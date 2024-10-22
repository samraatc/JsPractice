const body = document.querySelector('body');
body.style.backgroundColor = '#212121';
body.style.color = '#ffffff';


const randomNumber = parseInt(Math.random() * 100 + 1);
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
        if (guessCountNumber === 11){
            displayGuesses(userinput);
            displayMessage(`Game Over! You Lost! The Number was ${randomNumber}`);
            endGame();
        }else {
            displayGuesses(userinput);
            checkUserGuess(userinput);
            
        }
        // 
    }
};

function checkUserGuess() {
    // checkUserGuess is used to check if user input is right or wrong or equel to random number
    if (userinput === randomNumber) {
        displayMessage(`You Got it Right! The Number was ${randomNumber}`); 
        endGame();
    }else if (userinput > randomNumber) {
        displayMessage(`Your Guess is too Higher than ${randomNumber}`);
        // lowOrHi.textContent = 'Your Guess is Higher than the Number';
    }else if (userinput < randomNumber) {
        displayMessage(`Your Guess is too Lower than ${randomNumber}`);
        // lowOrHi.textContent = 'Your Guess is Lower than the Number';
    }


};


function displayGuesses(guess){
    // it wipes all the previous guess from guessSlot and display the new guess
    userguess.value = '';
    guessSlot.innerHTML += `${guess}, `;
    guessCountNumber++;
    guessCount.innerHTML = `${11 - guessCountNumber}`;
};

function displayMessage(message){
    //Display the alert message to the user
    lowOrHi.innerHTML = `<h2>${message}</h2>`
    
};

function newGame(){
    //
};

function endGame(){
    //
};


