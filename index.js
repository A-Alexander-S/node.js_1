const colors = require('colors/safe');

const startRange = process.argv[2];
const endRange = process.argv[3];

console.log(process.argv[2]);
console.log(process.argv[3]);

function primeNumbers(start, end) {
  let counter = start - 1;
  let counterColors = 1;
  if (Number.isInteger(start) && Number.isInteger(end)) {

    nextPrime: for (let i = start; i <= end; i++) {

      for (let j = 2; j < i; j++) {

        if (i % j == 0) {
          counter++;
          if (counter === end) console.log(colors.red(`Простых чисел в дипазоне от ${start} до ${end} нет.`));
          continue nextPrime
        };
      };

      if (true) {

        if (counterColors > 3) counterColors = 1;

        coloringPrimeNumbers(i, counterColors);
        counterColors++;
      }
    };
  } else {

    console.log(colors.red(new Error('В аргументах есть НЕ число')));
  };
};

primeNumbers(+startRange, +endRange);

function coloringPrimeNumbers(primeNumber, counterColors) {

  if (counterColors === 1) {
    console.log(colors.green(`Простое число  ${primeNumber}`));
  } else if (counterColors === 2) {
    console.log(colors.yellow(`Простое число  ${primeNumber}`));
  } else if (counterColors === 3) {
    console.log(colors.red(`Простое число  ${primeNumber}`));
  };
};
