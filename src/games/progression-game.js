import _ from 'lodash';
import gameValue from '../index-games.js';

const descriptionProgression = 'What number is missing in the progression?';

const getQuestionAndResult = () => {
  const firstNum = _.random(1, 20);
  const skipNum = _.random(2, 5);
  const hideNum = _.random(0, 9);
  let maxNum = firstNum;
  for (let x = 1; x <= 10; x += 1) {
    maxNum += skipNum;
  }

  const numbers = [];
  for (let j = firstNum; j < maxNum; j += skipNum) {
    numbers.push(j);
  }
  const rigthAnswer = numbers[hideNum].toString();
  numbers[hideNum] = '..';
  const questionProgression = numbers.join(' ');
  const resultProgression = rigthAnswer;
  return [questionProgression, resultProgression];
};
export default () => {
  gameValue(descriptionProgression, getQuestionAndResult);
};
