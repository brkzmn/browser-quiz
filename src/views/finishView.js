import { prizes } from '../data.js';
import { BREAKPOINT_BUTTON_ACCEPT_ID } from '../constants.js';

export const getFinishView = (index) => {
  const element = document.createElement('div');
  element.classList.add('finish-page-container');
  element.innerHTML = String.raw`
    <img class="logo" src="../public/assets/logo_millionaire.webp" alt="game logo">
    <h1 class="finish-title">Congratulations!!</h1>
    <p>You answered ${index} questions correctly and won ${
    prizes[index - 1]
  }$.</p>
    <button class='btn btn-accept' id='${BREAKPOINT_BUTTON_ACCEPT_ID}'>Return to Home</button>
    `;
  return element;
};
