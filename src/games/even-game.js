import _ from 'lodash';
import gameValue from '../index-games.js';

const descriptionEven = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAndResult = () => {
  const checkEvenNum = (questionEven) => {
    if (questionEven % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const questionEven = _.random(1, 20);
  const resultEven = checkEvenNum(questionEven);
  return [questionEven, resultEven];
};
export default () => {
  gameValue(descriptionEven, getQuestionAndResult);
};
