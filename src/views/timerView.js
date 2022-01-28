import {TIMER_INTERFACE_TEXT_ID} from '../constants.js'

export const initTimer = () => {
    const timerPage = document.createElement('div');
    timerPage.innerHTML = String.raw`
    <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div id='${TIMER_INTERFACE_TEXT_ID}' class="timer-text"></div></div>
    `
    return timerPage;
};
