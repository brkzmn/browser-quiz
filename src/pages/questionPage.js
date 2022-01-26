'use strict';

import { ANSWERS_LIST_ID, USER_INTERFACE_ID } from '../constants.js';
import { getQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initProcess } from '../views/processView.js';
import { initGameOverPage } from './gameOverPage.js';


export const initQuestionPage = () => {
  
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = getQuestionElement(currentQuestion.text);
  const userInterface = document.getElementById(USER_INTERFACE_ID);
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
 
};

const IsAnswerRight = (e) => {
  const answerList = document.querySelectorAll('.answer-list-item')
  Array.from(answerList).forEach(answer => {
    answer.classList.add('pointer-none')
  })
  
  setTimeout(() => {
    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
    setTimeout(() => {
      const rightAnswer = document.getElementById(currentQuestion.correct).nextElementSibling
      rightAnswer.style.backgroundColor = 'green';
    }, 500)
    if(e.target.previousElementSibling.id !== currentQuestion.correct){
      e.target.style.backgroundColor = 'red'
    }
  }, 1500);
}

const nextQuestion = (e) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const userInterfaceElement = document.getElementById(USER_INTERFACE_ID);
  if(e.target.previousElementSibling.id === currentQuestion.correct){
    setTimeout(() => {
      quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
      userInterfaceElement.innerHTML = '';
      initQuestionPage();
    }, 5000);
  }else {
    setTimeout(() => {
      userInterfaceElement.innerHTML = '';
      initGameOverPage()
    }, 5000);
  }
  
};
