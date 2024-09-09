import _ from 'lodash';
import gameValue from '../index-games.js';

const descriptionPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (questionPrime) => {
  if (questionPrime <= 1) {
    return 'no';
  }

  for (let y = 2; y < questionPrime; y += 1) {
    if ((questionPrime % y) === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAndResult = () => {
  const questionPrime = _.random(1, 100);
  const resultPrime = checkPrime(questionPrime);

  return [questionPrime, resultPrime];
};

export default () => {
  gameValue(descriptionPrime, getQuestionAndResult);
};
