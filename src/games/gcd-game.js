import _ from 'lodash';
import gameValue, { checkDivider } from '../index-games.js';

const descriptionGcd = 'Find the greatest common divisor of given numbers.';

const getQuestionAndResult = () => {
  const [randomNumberOne, randomNumberTwo] = [_.random(1, 100), _.random(1, 100)];
  const sameDividerNum = [];

  const findDividerNumberOne = checkDivider(randomNumberOne);
  const findDividerNumberTwo = checkDivider(randomNumberTwo);

  for (let m = 0; m < findDividerNumberOne.length; m += 1) {
    for (let k = 0; k < findDividerNumberTwo.length; k += 1) {
      if (findDividerNumberOne[m] === findDividerNumberTwo[k]) {
        sameDividerNum.push(findDividerNumberOne[m]);
      }
    }
  }

  const questionGcd = `${randomNumberOne} ${randomNumberTwo}`;

  const findMaxNum = Math.max(...sameDividerNum);
  const resultGcd = findMaxNum.toString();

  return [questionGcd, resultGcd];
};

export default () => {
  gameValue(descriptionGcd, getQuestionAndResult);
};
