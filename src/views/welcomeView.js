import { START_BUTTON_ID } from '../constants.js';

export const initWelcome = () => {
  const welcomePage = document.createElement('div');
  welcomePage.classList.add('welcome-container');
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  welcomePage.innerHTML = String.raw`
  <img class="logo" src="../public/assets/logo_millionaire.webp" alt="game logo">
      <h1 class='welcome-title'>Game Who Wants to Be a Millionaire?</h1>
      <p>Welcome to the free online version of the award-winning game show Who Wants to Be a Millionaire? The game is open to anyone willing to put their knowledge to the test in a series of questions and answers.</p>
      <p>The game consists of 15 questions. You have 30 seconds for each questions. After you tap on the choice, you can't change it. Answer will pop up two seconds after replying. You can take the prize at 5th and 10th question.</p>  
      <p>If you get stuck you can get help by clicking 50:50 button eliminates the two wrong choice. You can use 50:50 option once in all the contest. </p> 
      <button class='btn start-btn' id='${START_BUTTON_ID}'>Start</button>
    `;

  return welcomePage;
};
