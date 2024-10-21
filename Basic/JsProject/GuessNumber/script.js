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

function validateUserGuess() {
    //
};

function checkUserGuess() {
    //
};


function displayGuesses(){
    //
};

function displayMessage(){
    //
};

function newGame(){
    //
};

function endGame(){
    //
};


