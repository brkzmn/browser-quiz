import { getFinishView } from '../views/finishView.js';
import {
  BREAKPOINT_BUTTON_ACCEPT_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { quizData } from '../data.js';
import { loadApp } from '../app.js';

export const initFinishPage = (index) => {
  const finishView = getFinishView(index);
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.appendChild(finishView);

  const backToHomeBtn = document.getElementById(BREAKPOINT_BUTTON_ACCEPT_ID);

  backToHomeBtn.addEventListener('click', finish);
};

const finish = () => {
  const userInterfaceElement = document.getElementById(USER_INTERFACE_ID);
    userInterfaceElement.innerHTML = '';
    quizData.currentQuestionIndex = 0;
    loadApp();
}
