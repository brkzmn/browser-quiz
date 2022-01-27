import { initWelcomePage } from './welcomePage.js';
import { createWrongAnswerPage } from '../views/wrongAnswerView.js';
import { USER_INTERFACE_ID, RESTART_BUTTON_ID } from '../constants.js';

export const initGameOverPage = () => {
    const wrongAnswerElement = createWrongAnswerPage()
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.appendChild(wrongAnswerElement);

    document.getElementById(RESTART_BUTTON_ID)
    .addEventListener('click', () => {
        userInterface.innerHTML = ''
        setTimeout(() => {
            initWelcomePage()
        },300)
        
    })
}



