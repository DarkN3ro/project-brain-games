import _ from 'lodash';
import gameOption from '../index-games.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAndResult = () => {
  const checkEvenNum = (questionGame) => {
    if (questionGame % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const questionGame = _.random(1, 20);
  const resultGame = checkEvenNum(questionGame);
  return [questionGame, resultGame];
};
export default () => {
  gameOption(descriptionGame, getQuestionAndResult);
};
