import { FIFTY_BUTTON_ID } from '../constants.js';


export const getFiftyFiftyElement = () => {
    const element = document.createElement('div');
    // I use String.raw just to get fancy colors for the HTML in VS Code.
    element.innerHTML = String.raw`
        <button id="${FIFTY_BUTTON_ID}">50:50</button>
    `;
    return element;
};
