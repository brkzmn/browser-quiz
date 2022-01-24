'use strict';

import { quizData } from './data.js';
import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initQuestionPage();
};

window.addEventListener('load', loadApp);
