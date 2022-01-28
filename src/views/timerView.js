import {TIMER_INTERFACE_ID} from '../constants.js'

export const initTimer = () => {
    const timerPage = document.createElement('div');
    timerPage.id = TIMER_INTERFACE_ID;
    return timerPage;
};
  