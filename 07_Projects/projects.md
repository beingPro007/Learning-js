# projects related to DOM
project link 
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-6esvnj?file=index.html)

# Solution Code 
## Project 1
```JAVASCRIPT 
console.log("Gautam")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  });
});
```
## Project 2

```JavaScript
const form = document.querySelector("form")
// this gives error of null point exception as you are giving the value before clicking becusw of this ot gives null
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener('submit',function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`
  }else{
    const bmi = (weight / ((height * height)/10000)).toFixed(2);
    if(bmi < 18.6){
      results.innerHTML = `<span>Your BMI is ${bmi} and you are Under Weight</span>`
    }
    else if(bmi >= 18.6 && bmi < 24.9){
      results.innerHTML = `<span>Your BMI is ${bmi} and you are in Normal range</span>`
    }
    else{
      results.innerHTML = `<span>Your BMI is ${bmi} and you are overweight</span>`
    }
  }
})
```

## Project 3 

```javascript

const clock = document.getElementById('clock');


setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000)

```

## Project 4
```JavaScript

let randomNumber = parseInt(Math.random() * 100 + 1); // Generate a random number
console.log(randomNumber); // Log the random number to the console

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess <= 1 || guess > 100) {
    alert('Please enter a valid number between 1 and 100');
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) { // Corrected to check if numGuess is greater than or equal to 10
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess} guesses left`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h3 id="newGame">Start new Game</h3>`; 
  playGame = false;
  startOver.appendChild(p);
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess} guesses left`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```