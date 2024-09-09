import readlineSync from 'readline-sync';

export default (description, getQuestionAndResult) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  let i = 0;
  while (i < 3) {
    const [question, result] = getQuestionAndResult();

    const answer = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (result === answer) {
      console.log('Correct!');
    } else if (result !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
      process.exit();
    }
    i += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
