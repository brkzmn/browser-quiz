import { getBreakpointView } from '../views/breakpointView.js';
import { USER_INTERFACE_ID } from '../constants.js';
export const initBreakpointPage = (index) => {
    const breakpoint = getBreakpointView(index);  
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.appendChild(breakpoint); 

}