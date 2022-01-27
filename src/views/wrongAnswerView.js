'use strict';
import { quizData } from '../data.js';

export const createWrongAnswerPage = () => {
  const index = quizData.currentQuestionIndex
  let prize;
  if(index >= 5 && index < 10)
    prize = '$ 2000';
  if(index >= 10 && index < 15)
    prize = '$ 15000'
  else
    prize = '$ 0'
  
  const element = document.createElement('div');
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>OPPPS! WRONG ANSWER</h1>
    <p>You won ${prize}</p>
    <button id="restart">RESTART</button>
    `;
  
    return element;
  };
  