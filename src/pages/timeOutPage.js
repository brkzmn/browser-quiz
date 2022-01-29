import { loadApp } from '../app.js';
import { createTimeOutPage } from '../views/timeOutView.js';
import { USER_INTERFACE_ID, RESTART_BUTTON_ID, RESTART_DURATION } from '../constants.js';
import { quizData } from '../data.js';

const userInterface = document.getElementById(USER_INTERFACE_ID);

export const initTimeOutPage = () => {
  const timeOutElement = createTimeOutPage();
  userInterface.innerHTML = '';
  userInterface.appendChild(timeOutElement);
  document.getElementById(RESTART_BUTTON_ID)
  .addEventListener('click', restartQuiz)
}

const restartQuiz = () => {
    userInterface.innerHTML = ''
    setTimeout(() => {
        quizData.currentQuestionIndex = 0
        loadApp()
    },RESTART_DURATION)
}

