'use strict';

const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

btnRoll.addEventListener('click', () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    current0Element.textContent = currentScore;
  } else {
  }
});
