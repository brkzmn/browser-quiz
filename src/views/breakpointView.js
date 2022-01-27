
import { prizes } from "../data.js";
// import { BREAKPOINT_BUTTON_ACCEPT_ID } from '../data.js';
// import { BREAKPOINT_BUTTON_CONTINUE_ID } from '../data.js';



export const getBreakpointView = (index) => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`
    <img class="logo" src="../public/assets/logo_millionaire.webp" alt="game logo">
    <p>You answered question ${index} correctly. You have reached breakpoint</p>
    <p>Your current prize is ${prizes[(index)]} if you want, you can take this prize and leave.</p>
    `
    return element
}
/* <button class='btn btn-accept' id='${BREAKPOINT_BUTTON_ACCEPT_ID}'>Take the prize</button>
<button class='btn btn-continue' id='${BREAKPOINT_BUTTON_CONTINUE_ID}'>Continue</button> */