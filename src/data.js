'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/
export const prizes = ['100','200','300', '500', '1 000', '2 000', '4 000', '8 000', '16 000', '32 000', '64 000', '125 000', '250 000', '500 000', '1 000 000'];

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      id: 1,
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
        d: 'var, let, const',
      },
      correct: 'c',
      difficulty: 'easy',
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      id: 2,
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      difficulty: 'easy',
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      id: 3,
      text: 'This is the question  3?',
      answers: {
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
      },
      correct: 'c',
      difficulty: 'easy',
      links: [],
    },
    {
      id: 4,
      text: 'This is the question  4?',
      answers: {
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
      },
      correct: 'c',
      difficulty: 'easy',
      links: [],
    },
    {
      id: 5,
      text: 'This is the question  5?',
      answers: {
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
      },
      correct: 'c',
      difficulty: 'easy',
      links: [],
    },
    {
      id: 6,
      text: 'This is the question  6?',
      answers: {
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
      },
      correct: 'c',
      difficulty: 'medium',
      links: [],
    },
    {
      id: 7,
      text: 'This is the question  7?',
      answers: {
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
      },
      correct: 'c',
      difficulty: 'medium',
      links: [],
    },
    {
      id: 8,
      text: 'This is the question  8?',
      answers: {
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
      },
      correct: 'c',
      difficulty: 'medium',
      links: [],
    },
    {
      id: 9,
      text: 'This is the question  9?',
      answers: {
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
      },
      correct: 'c',
      difficulty: 'medium',
      links: [],
    },
    {
      id: 10,
      text: 'This is the question 10?',
      answers: {
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
      },
      correct: 'c',
      difficulty: 'medium',
      links: [],
    },
    {
      id: 11,
      text: 'This is the question 11?',
      answers: {
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
      },
      correct: 'c',
      difficulty: 'hard',
      links: [],
    },
    {
      id: 12,
      text: 'This is the question 12?',
      answers: {
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
      },
      correct: 'c',
      difficulty: 'hard',
      links: [],
    },
    {
      id: 13,
      text: 'This is the question 13?',
      answers: {
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
      },
      correct: 'c',
      difficulty: 'hard',
      links: [],
    },
    {
      id: 14,
      text: 'This is the question 14?',
      answers: {
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
      },
      correct: 'c',
      difficulty: 'hard',
      links: [],
    },
    {
      id: 15,
      text: 'This is the question?',
      answers: {
        a: 'Answer A',
        b: 'Answer B',
        c: 'Answer C',
        d: 'Answer D',
      },
      correct: 'c',
      difficulty: 'hard',
      links: [],
    },
    
    // Add more questions here
  ],
};
