'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('🙅‍♂️ No Number');
  } else if (guess === secretNumber) {
    displayMessage('👌 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔼 too high!' : '🔽 too low!')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🗿 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function() {
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
