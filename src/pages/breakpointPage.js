import { getBreakpointView } from '../views/breakpointView.js';
import {
  BREAKPOINT_BUTTON_ACCEPT_ID,
  BREAKPOINT_BUTTON_CONTINUE_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { quizData } from '../data.js';
import { initQuestionPage } from './questionPage.js';
import { loadApp } from '../app.js';

const userInterfaceElement = document.getElementById(USER_INTERFACE_ID);

export const initBreakpointPage = (index) => {
  const breakpoint = getBreakpointView(index);
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.appendChild(breakpoint);

  const continueBtn = document.getElementById(BREAKPOINT_BUTTON_CONTINUE_ID);
  const acceptBtn = document.getElementById(BREAKPOINT_BUTTON_ACCEPT_ID);

  continueBtn.addEventListener('click', continueQuiz);

  acceptBtn.addEventListener('click', leaveQuiz);
  
}

const continueQuiz = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  userInterfaceElement.innerHTML = '';
  initQuestionPage();
}

const leaveQuiz = () => {
  userInterfaceElement.innerHTML = '';
    quizData.currentQuestionIndex = 0;
    loadApp();
}
