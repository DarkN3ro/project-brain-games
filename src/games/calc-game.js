import _ from 'lodash';
import gameOption from '../index-games.js';

const descriptionGame = 'What is the result of the expression?';
const getQuestionAndResult = () => {
  const numOne = _.random(1, 30);
  const numTwo = _.random(1, 30);
  const operations = ['-', '+', '*'];
  const randomOperation = _.sample(operations);
  const questionGame = `${numOne} ${randomOperation} ${numTwo}`;

  let sum;
  if (randomOperation === '*') {
    sum = numOne * numTwo;
  } else if (randomOperation === '-') {
    sum = numOne - numTwo;
  } else if (randomOperation === '+') {
    sum = numOne + numTwo;
  }
  const resultGame = sum.toString();
  return [questionGame, resultGame];
};

export default () => {
  gameOption(descriptionGame, getQuestionAndResult);
};
