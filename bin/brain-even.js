import readlineSync from 'readline-sync';
import salut from '../src/cli.js';

const MAX = 10;
const name = salut();

const isEven = (number) => number % 2 === 0;

const answersСorrectly = (currentAnswer, rightAnswer) => {
  if ((currentAnswer === 'yes' && rightAnswer) || (currentAnswer === 'no' && !rightAnswer)) {
    return true;
  }
  return false;
};

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const curNumber = Math.floor(Math.random() * MAX);
    console.log(`Question: ${curNumber}`);
    const currentAnswer = readlineSync.question('Your answer: ');
    const answer = answersСorrectly(currentAnswer, isEven(curNumber));

    if (!answer) {
      console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

even();
