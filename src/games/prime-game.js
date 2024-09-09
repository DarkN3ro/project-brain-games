import _ from 'lodash';
import gameOption from '../index-games.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndResult = () => {
  const checkPrime = (questionGame) => {
    if (questionGame <= 1) {
      return 'no';
    }
    let y = 2;
    while (y < questionGame) {
      if ((questionGame % y) === 0) {
        return 'no';
      }
      y += 1;
    }
    return 'yes';
  };
  const questionGame = _.random(1, 100);
  const resultGame = checkPrime(questionGame);
  return [questionGame, resultGame];
};
export default () => {
  gameOption(descriptionGame, getQuestionAndResult);
};
