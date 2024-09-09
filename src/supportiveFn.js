import _ from 'lodash';

export const checkPrime = (questionGame) => {
  if (questionGame <= 1) {
    return false;
  }

  let y = 2;
  while (y < questionGame) {
    if ((questionGame % y) === 0) {
      return false;
    }
    y += 1;
  }
  return true;
};

export const randomNumberOne = _.random(1, 100);
export const randomNumberTwo = _.random(1, 99);

export const checkDivider = (number) => {
  const result = [];
  for (let a = 1; a <= number; a += 1) {
    if ((number % a) === 0) {
      result.push(a);
    }
  }
  return result;
};
