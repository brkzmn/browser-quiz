'use strict';

import { ANSWERS_LIST_ID, USER_INTERFACE_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { getQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initProcess } from '../views/processView.js';

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

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  const inputs = document.getElementsByTagName('label');
  Array.from(inputs).forEach(input => {
    input.addEventListener("click", rightAnswer);
  });
 
};

const rightAnswer = (e) => {
  e.target.previousElementSibling.checked = true
  const inputs = document.querySelectorAll('input[name="answer"]');
  if(Array.from(inputs).some(input => input.checked)){
    setTimeout(() => {
      const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
      const rightAnswer = document.getElementById(currentQuestion.correct).nextElementSibling
      rightAnswer.style.backgroundColor = 'green';
    }, 2000);
    
    
  }
  
}




const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  const userInterfaceElement = document.getElementById(USER_INTERFACE_ID);
  userInterfaceElement.innerHTML = '';

  initQuestionPage();
};
