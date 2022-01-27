import { quizData } from '../data.js';
import { prizes } from '../data.js';
import { PROCESS_BAR_ID } from '../constants.js';

export const initProcess = () => {
  const processElement = document.createElement('ul');
  processElement.classList.add('process-bar-list');
  quizData.questions.forEach((element, index) => {
    const liElement = document.createElement('li');
    liElement.textContent = `${index + 1} -- ${prizes[index]}$`;
    processElement.appendChild(liElement);
  });
  const liArray = Array.from(processElement.children);
  liArray.forEach((item) => {
    item.classList.add('disabled-bar');
  });
  liArray[quizData.currentQuestionIndex].classList.remove('disabled-bar');
  liArray[quizData.currentQuestionIndex].classList.add('active-bar');
  const newDiv = document.createElement('div');
  newDiv.id = PROCESS_BAR_ID;
  newDiv.appendChild(processElement);
  return newDiv;
};
