'use strict';
const message = document.querySelector('.message');
const again = document.querySelector('.again');
const numberBox = document.querySelector('.number');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const scores = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const overlayP = document.querySelector('.overlayp');
const close = document.querySelector('.close-modal');
const closer = document.querySelector('.close-lost');
const description = document.querySelector('.description-game');
const lost = document.querySelector('.lost');

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let numberScore = 0;

const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeLost = () => {
  lost.classList.add('hidden');
  overlay.classList.add('hidden');
};
const looser = () => {
  lost.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const guessBox = function () {
  console.log(Number(guess.value));

  if (!guess.value) {
    message.textContent = 'no number 😒!!!!!';
  } else if (guess.value == 0 || guess.value > 20) {
    message.textContent = 'choose number between 1 to 20 😉!!!!!';
    body.style.backgroundColor = 'brown';
  } else if (score > 1) {
    if (guess.value == number) {
      showModal();
      overlay.addEventListener('click', closeModal);
      close.addEventListener('click', closeModal);
      message.textContent = '🎉🎉 correct number🏆!!!!!';
      numberBox.textContent = number;
      body.style.backgroundColor = 'green';
      highScore.textContent = score + score;
      numberBox.style.width = '30rem';
      if (score > numberScore) {
        numberScore = score;
        highScore.textContent = numberScore;
      }
    } else if (guess.value > number) {
      message.textContent = 'Too high try again 😐!!!!!';
      body.style.backgroundColor = '#F7A150';
      score--;
      scores.textContent = score;
    } else if (guess.value < number) {
      message.textContent = 'Too low try again 😐!!!!!';
      body.style.backgroundColor = '#F65252 ';
      score--;
      scores.textContent = score;
    }
  } else {
    body.style.backgroundColor = '#F31F05';
    message.textContent = '😭 YOU LOST THE GAME!!!';
    score = 0;
    scores.textContent = score;
    looser();
    overlay.addEventListener('click', closeLost);
    closer.addEventListener('click', closeLost);
  }
};
check.addEventListener('click', guessBox);
again.addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  message.textContent = '🤔 Start guessing...';
  scores.textContent = score;
  numberBox.textContent = '?';
  guess.value = '';
  body.style.backgroundColor = 'rgb(2, 0, 36)';
  numberBox.style.width = '15rem';
});
console.log(again);
window.addEventListener('load', () => {
  description.classList.remove('hidden');
  overlayP.classList.remove('hidden');
});
window.addEventListener('click', () => {
  description.classList.add('hidden');
  overlayP.classList.add('hidden');
});
