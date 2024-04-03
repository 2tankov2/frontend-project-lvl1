#!/usr/bin/env node

import readlineSync from 'readline-sync';
import salut from '../src/cli.js';

const maxNumber = 10;
const MathSings = ['-', '+', '*'];

const random = (max) => Math.floor(Math.random() * max);

const calc = (num1, num2, sing) => {
  switch (sing) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const name = salut();

const isRightAnswer = (currentAnswer, rightAnswer) => Number(currentAnswer) === rightAnswer;

const gameCalc = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = random(maxNumber);
    const num2 = random(maxNumber);
    const randomIndex = random(MathSings.length);
    const mathSing = MathSings[randomIndex];

    console.log(`Question: ${num1} ${mathSing} ${num2}`);

    const currentAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calc(num1, num2, mathSing);
    const answer = isRightAnswer(currentAnswer, correctAnswer);

    if (!answer) {
      console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

gameCalc();
