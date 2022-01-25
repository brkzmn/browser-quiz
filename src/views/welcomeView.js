import {START_BUTTON_ID} from '../constants.js';



export const initWelcome = () => {
    const welcomePage = document.createElement('div');
    welcomePage.classList.add('welcomeContainer');
    // I use String.raw just to get fancy colors for the HTML in VS Code.
    welcomePage.innerHTML = String.raw`
      <h1 class='welcomeTitle'>Game Who Wants to Be a Millionaire?</h1>
      <p>Welcome to the free online version of the award-winning game show Who Wants to Be a Millionaire? The game is open to anyone willing to put their knowledge to the test in a series of questions and answers.</p>
      <p>The game consists of 10 questions. You have 30 seconds for each questions. After you tap on the choice, you can't change it. Answer will pop up two seconds after replying. You can take the prize at 5th and 10th question.</p>  
      <p>If you get stuck you can call your friend to get help by clicking help button. 50/50 option eliminates the two wrong choice. There is also an option to take a hint. You can utilize help option once in all the contest. </p> 
      <button class='startBtn' id='${START_BUTTON_ID}'>Start</button>
    `;
  
    return welcomePage;
  };