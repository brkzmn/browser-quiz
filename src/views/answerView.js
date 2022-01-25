'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.classList.add('answer-list-item');
  element.innerHTML = String.raw`
  <input type="radio" id="${key}" name="answer" value="${answerText}">
  <label for="${key}">${key.toUpperCase()}: ${answerText}</label>
  `;

  return element;
};

