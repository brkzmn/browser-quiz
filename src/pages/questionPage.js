'use strict';

import { ANSWERS_LIST_ID, USER_INTERFACE_ID, FIFTY_BUTTON_ID } from '../constants.js';
import { getQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initProcess } from '../views/processView.js';
import { getHelpElement } from '../views/helpView.js';


export const initQuestionPage = () => {
  const currentQuestion = getCurrentQuestion();
  const userInterface = document.getElementById(USER_INTERFACE_ID);

  const helpElement = getHelpElement();
  if (localStorage.getItem('fiftyFiftyIsUsed') === 'true' ){
    helpElement.firstElementChild.disabled = true;
  }
  userInterface.appendChild(helpElement);

  const questionElement = getQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  const process = initProcess();
  userInterface.appendChild(process);

  const inputs = document.getElementsByTagName('label');
  Array.from(inputs).forEach(input => {
    input.addEventListener("click", (e) => {
      IsAnswerRight(e);
      nextQuestion(e);
    });
  });

  const buttonElement = document.getElementById(FIFTY_BUTTON_ID);
  buttonElement.addEventListener('click',fiftyFifty)
};

const IsAnswerRight = (e) => {
  const answerList = document.querySelectorAll('.answer-list-item')
  Array.from(answerList).forEach(answer => {
    answer.classList.add('pointer-none')
  })
  
  setTimeout(() => {
    const currentQuestion = getCurrentQuestion(); 
    const rightAnswer = document.getElementById(currentQuestion.correct).nextElementSibling
    rightAnswer.style.backgroundColor = 'green';
    if(e.target.previousElementSibling.id !== currentQuestion.correct){
      e.target.style.backgroundColor = 'red'
    }
  }, 2000);
}

const getCurrentQuestion = () => {
  const order = localStorage.getItem('ids').split(',');
  const newIndex = parseInt(order[quizData.currentQuestionIndex]);
  
  return quizData.questions.filter((item) => item.id === newIndex)[0];
}

const nextQuestion = (e) => {
  const currentQuestion = getCurrentQuestion();
  
  if(e.target.previousElementSibling.id === currentQuestion.correct){
    setTimeout(() => {
      quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
      getCurrentQuestion()

      const userInterfaceElement = document.getElementById(USER_INTERFACE_ID);
      userInterfaceElement.innerHTML = '';
      initQuestionPage();
    }, 5000);
  }else {
    setTimeout(() => {
      const lostScreen = document.getElementById('user-interface')
      lostScreen.innerHTML = `LOST`
    }, 5000);
  }
  
};

const fiftyFifty = () => {
  const curQuestion = quizData.questions[quizData.currentQuestionIndex]
  const allAnswers = ['a','b','c','d'];
  const wrongAnswers = collect(allAnswers)
    .reject(answer => answer == curQuestion.correct)
    .shuffle()
    .slice(0,2)
    .each((answer) => {
      const nextElement = document.getElementById(answer).nextElementSibling.classList.add('wrong-answer');
    })
  const button = document.getElementById(FIFTY_BUTTON_ID)
  button.disabled = true;
  localStorage.setItem('fiftyFiftyIsUsed', 'true');

};