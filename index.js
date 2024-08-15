const app = document.getElementById("app");
// const gameBox = document.createElement('table');

const randomNum = Math.trunc(Math.random() * 100 + 1);
// console.log(Math.trunc(47.12));
// console.log(Math.trunc(48.86));
// console.log(Math.random()); // -- Picks the random number between 0 and 1

console.log(randomNum);

//Create Prompt for user to guess

// setTimeout(() => {
//     console.log('This is a throwaway message');

// },2000)
let guess;
console.log(guess);
let output = "";

window.alert("Welcome!Please guess a number between 1-100");

do {
  guess = parseInt(window.prompt("Pick a number between 1-100"));
  if (randomNum === guess) {
    output = `You did it. You are such a smart cookie!`;
  } else {
    output = `Sorry..the random number was ${randomNum}, please play again`;
  }
  window.alert(output);
} while (randomNum !== guess);
