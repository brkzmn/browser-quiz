import { initWelcome } from '../views/welcomeView.js';
import { USER_INTERFACE_ID, START_BUTTON_ID } from '../constants.js';
import { initQuestionPage } from './questionPage.js';

const userInterface = document.getElementById(USER_INTERFACE_ID);
const welcome = initWelcome();  

export const initWelcomePage = () => {
    userInterface.appendChild(welcome);
    document.getElementById(START_BUTTON_ID)
    .addEventListener('click', startQuiz);
}

const startQuiz = () => {
    localStorage.removeItem('fiftyFiftyIsUsed')
    initQuestionPage();
    userInterface.removeChild(welcome);
}

//Welcome Page builder function