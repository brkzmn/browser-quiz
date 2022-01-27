'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const getQuestionElement = (question) => {
  const element = document.createElement('div');
  element.classList.add('question-wrapper');
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <img class="logo" src="../public/assets/logo_millionaire.webp" alt="game logo">
    <h3 class="question-title">${question}</h3>

    <ul id="${ANSWERS_LIST_ID}"></ul>
  `;

  return element;
};
