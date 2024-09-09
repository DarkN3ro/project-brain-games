import readlineSync from 'readline-sync';
import _ from 'lodash';
import greeting, { checkAnswer, checkDivider } from '../index.js';

export default () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;
  while (i < 3) {
    const numberOne = _.random(1, 100);
    const numberTwo = _.random(1, 100);
    const answer = readlineSync.question(`Question: ${numberOne} ${numberTwo}  \nYour answer: `);

    const resultOne = checkDivider(numberOne);
    const resultTwo = checkDivider(numberTwo);

    const sameNum = [];
    for (let m = 0; m < resultOne.length; m += 1) {
      for (let k = 0; k < resultTwo.length; k += 1) {
        if (resultOne[m] === resultTwo[k]) {
          sameNum.push(resultOne[m]);
        }
      }
    }

    const findMaxNum = Math.max(...sameNum);
    const result = findMaxNum.toString();

    checkAnswer(result, answer, userName);
    i += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};