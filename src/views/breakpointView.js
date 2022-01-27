
import { prizes } from "../data.js";
import { BREAKPOINT_BUTTON_ACCEPT_ID } from '../constants.js';
import { BREAKPOINT_BUTTON_CONTINUE_ID } from '../constants.js';



export const getBreakpointView = (index) => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`
    <img class="logo" src="../public/assets/logo_millionaire.webp" alt="game logo">
    <p>You answered ${index} questions correctly. You reached the breakpoint</p>
    <p>Your current prize is ${prizes[(index - 1)]} $ if you want, you can take this prize and leave.</p>
    <button class='btn btn-accept' id='${BREAKPOINT_BUTTON_ACCEPT_ID}'>Take the prize</button>
    <button class='btn btn-continue' id='${BREAKPOINT_BUTTON_CONTINUE_ID}'>Continue</button>
    `
    return element
}