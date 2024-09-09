import _ from 'lodash';
import gameValue from '../index-games.js';

const descriptionCalc = 'What is the result of the expression?';
const getQuestionAndResult = () => {
  const numOne = _.random(1, 30);
  const numTwo = _.random(1, 30);
  const operations = ['-', '+', '*'];
  const randomOperation = _.sample(operations);
  const questionCalc = `${numOne} ${randomOperation} ${numTwo}`;

  let sum;
  if (randomOperation === '*') {
    sum = numOne * numTwo;
  } else if (randomOperation === '-') {
    sum = numOne - numTwo;
  } else if (randomOperation === '+') {
    sum = numOne + numTwo;
  }
  const resultCalc = sum.toString();
  return [questionCalc, resultCalc];
};

export default () => {
  gameValue(descriptionCalc, getQuestionAndResult);
};
