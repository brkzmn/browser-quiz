import { quizData, prizes } from '../data.js';
import { RESTART_BUTTON_ID } from '../constants.js';

export const createTimeOutPage = () => {
  const index = quizData.currentQuestionIndex
  let prize;
  if(index < 5){
    prize = '$ 0'
  }
  if(index >= 5 && index < 10){
    prize = `$ ${prizes[4]}`;
  }  
  if(index >= 10 && index < 15){
    prize = `$ ${prizes[9]}`
  }
  
  const element = document.createElement('div');
  element.classList.add('wrong-answer-container')
  element.innerHTML = String.raw`
    <img class="logo" src="../public/assets/logo_millionaire.webp" alt="game logo">
    <h1 class='welcome-title' >OPPPS! TIME OUT</h1>
    <p class="wrong-answer-text">You won ${prize}</p>
    <button id="${RESTART_BUTTON_ID}" class="btn">RESTART</button>
    `;
  
  return element;
};
    