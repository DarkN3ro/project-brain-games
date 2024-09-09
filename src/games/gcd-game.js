import _ from 'lodash';
import gameOption, { checkDivider } from '../index-games.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';
const getQuestionAndResult = () => {
  const randomNumberOne = _.random(1, 100);
  const randomNumberTwo = _.random(1, 100);
  const questionGame = `${randomNumberOne} ${randomNumberTwo}`;

  const resultOne = checkDivider(randomNumberOne);
  const resultTwo = checkDivider(randomNumberTwo);

  const sameNum = [];
  for (let m = 0; m < resultOne.length; m += 1) {
    for (let k = 0; k < resultTwo.length; k += 1) {
      if (resultOne[m] === resultTwo[k]) {
        sameNum.push(resultOne[m]);
      }
    }
  }

  const findMaxNum = Math.max(...sameNum);
  const resultGame = findMaxNum.toString();
  return [questionGame, resultGame];
};
export default () => {
  gameOption(descriptionGame, getQuestionAndResult);
};
