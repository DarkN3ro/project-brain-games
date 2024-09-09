import _ from 'lodash';
import gameValue, { checkDivider } from '../index-games.js';

const descriptionGcd = 'Find the greatest common divisor of given numbers.';

const getQuestionAndResult = () => {
  const [randomOne, randomTwo] = [_.random(1, 100), _.random(1, 100)];
  const sameDividerNum = [];

  const findDividerOne = checkDivider(randomOne);
  const findDividerTwo = checkDivider(randomTwo);

  for (let m = 0; m < findDividerOne.length; m += 1) {
    if (findDividerTwo.includes(findDividerOne[m])) {
      sameDividerNum.push(findDividerOne[m]);
    }
  }

  const questionGcd = `${randomOne} ${randomTwo}`;

  const findMaxNum = Math.max(...sameDividerNum);
  const resultGcd = findMaxNum.toString();

  return [questionGcd, resultGcd];
};

export default () => {
  gameValue(descriptionGcd, getQuestionAndResult);
};
