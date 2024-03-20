// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

const salut = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default salut;
