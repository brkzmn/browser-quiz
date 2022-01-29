import { TIMER_INTERFACE_TEXT_ID } from '../constants.js';

export const initTimer = () => {
  const timerPage = document.createElement('div');
  timerPage.classList.add('time-wrapper');
  timerPage.innerHTML = String.raw`
    <div class="loader"></div>
    <span id='${TIMER_INTERFACE_TEXT_ID}' class="time"></span>  
    `;
  return timerPage;
};
