'use strict';
import { quizData } from '../data.js';

export const createWrongAnswerPage = () => {
  
  const element = document.createElement('div');
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>OPPPS! WRONG ANSWER</h1>
   
    <button id="restart">RESTART</button>
    `;
  
    return element;
  };
  