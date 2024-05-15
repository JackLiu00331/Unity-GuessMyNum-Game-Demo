"use strict";

let guessNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
console.log(guessNum);
let result = document.querySelector(".message");
const scoreText = document.querySelector(".score");
const highscoreText = document.querySelector(".highscore");
const body = document.querySelector("body");
const guess = document.querySelector(".guess");
const numText = document.querySelector(".number");
let highestScore = 0;
btnCheck.addEventListener("click", function () {
  let playerGuessNum = Number(document.querySelector(".guess").value);
  if (playerGuessNum) {
    if (playerGuessNum > 0 && playerGuessNum < 21) {
      //when guess is correct
      if (playerGuessNum === guessNum) {
        displayMessage(`🏆 Correct number !`);
        numText.textContent = guessNum;
        body.style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highestScore) {
          highestScore = score;
          highscoreText.textContent = highestScore;
        }
      }
      // when guess is wrong
      else if (playerGuessNum !== guessNum) {
        if (score > 1) {
          displayMessage(
            playerGuessNum > guessNum ? `📈 Too high !` : `📉 Too Low !`
          );
          score--;
          scoreText.textContent = score;
        } else {
          displayMessage("💥 You lost !");
          scoreText.textContent = 0;
        }
      }
    } else {
      displayMessage(`❌ Number should between 1 and 20!`);
    }
  } else {
    displayMessage(`❌ No number !`);
  }
});

btnAgain.addEventListener("click", function () {
  // body
  score = 20;
  guessNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  scoreText.textContent = score;
  numText.textContent = "?";
  guess.value = "";
  highscoreText.textContent = highestScore;
  body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

function displayMessage(message) {
  // body
  document.querySelector(".message").textContent = message;
}
