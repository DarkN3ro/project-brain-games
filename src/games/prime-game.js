import _ from 'lodash';
import gameOption from '../index-games.js';
import { checkPrime } from '../supportiveFn.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndResult = () => {
  const questionGame = _.random(1, 100);
  const resultGame = checkPrime(questionGame) ? 'yes' : 'no';
  return [questionGame, resultGame];
};
export default () => {
  gameOption(descriptionGame, getQuestionAndResult);
};
