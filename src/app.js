'use strict';

import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';


const loadApp = () => {

  initWelcomePage();
  shuffleQuestions();
};

const shuffleQuestions = () => {
  const questionIds = ["fdf"];

  collect(quizData.questions).where('difficulty','easy').shuffle().slice(0,5).each((question) => {
    questionIds.push(question.id);
  });
  collect(quizData.questions).where('difficulty','medium').shuffle().slice(0,5).each((question) => {
    questionIds.push(question.id);
  });
  collect(quizData.questions).where('difficulty','hard').shuffle().slice(0,5).each((question) => {
    questionIds.push(question.id);
  })

  localStorage.setItem('ids', questionIds);
}


window.addEventListener('load', loadApp);
//We changed construction of loadApp