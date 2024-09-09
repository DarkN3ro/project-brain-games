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

export const checkDivider = (number, number2) => {
  const result = [];
  const result2 = [];
  for (let a = 1; a <= number; a += 1) {
    if ((number % a) === 0) {
      result.push(a);
    }
  }
  for (let b = 1; b <= number2; b += 1) {
    if ((number2 % b) === 0) {
      result2.push(b);
    }
  }
  return [result, result2];
};
