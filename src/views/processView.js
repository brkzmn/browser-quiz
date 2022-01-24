import { quizData } from '../data.js'
import { PROCESS_BAR } from '../constants.js';


export const initProcess = () =>{
    const processElement = document.createElement('ul');
    quizData.questions.forEach((element,index) => {
        const liElement =  document.createElement('li');
        liElement.textContent = `${index+1} --- ${element.prize}`;
        processElement.appendChild(liElement);
    });
    const liArray = Array.from(processElement.children)
    liArray.forEach( item => {
        item.classList.add('disabled');
    })
    liArray[quizData.currentQuestionIndex].classList.remove('disabled');
    liArray[quizData.currentQuestionIndex].classList.add('active');
    const newDiv = document.createElement('div');
    newDiv.id = PROCESS_BAR;
    newDiv.appendChild(processElement);
    return newDiv;
}