import { quizData } from '../data.js';
import { prizes } from '../data.js';
import { PROCESS_BAR_ID } from '../constants.js';


export const initProcess = () => {
  const processBarWrapper = document.createElement('div');
  processBarWrapper.id = PROCESS_BAR_ID;
  const processElement = document.createElement('ul');
  processElement.classList.add('process-bar-list')
  for(let i = 0; i < 15; i++ ) {
    const liElement = document.createElement('li');
    liElement.textContent = `${i+ 1} -- ${prizes[i]}$`;
    (i === quizData.currentQuestionIndex) ? liElement.classList.add('active-bar') : liElement.classList.add('disabled-bar');
    processElement.appendChild(liElement);
  }
  processBarWrapper.appendChild(processElement);
  return processBarWrapper
}