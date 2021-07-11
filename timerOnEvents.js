

// Задача № 1.

// console.log('Record 1');

// setTimeout(() => {
//   console.log('Record 2');
//   Promise.resolve().then(() => {
//     setTimeout(() => {
//       console.log('Record 3');
//       Promise.resolve().then(() => {
//         console.log('Record 4');
//       });
//     });
//   });
// });

// console.log('Record 5');

// Promise.resolve().then(() => Promise.resolve().then(() => console.log('Record 6')));

// 

// Ответ: 1 5 6 2 3 4



// Задача № 2.
const EventEmitter = require('events');

let emitter = new EventEmitter();
let logText = '';
let timersFinished = [];

let argument = process.argv.slice(2);
// console.log(argument);

for (let i = 0; i < argument.length; i++) {
  let arr = argument[i].split('-');

  let year = arr[5];
  let month = arr[4];
  let day = arr[3];
  let hour = arr[2];
  let minute = arr[1];
  let second = arr[0];

  console.log(arr);

  let endTime = new Date(year, month - 1, day, hour, minute, second);
  let startTime = new Date();
  let diff = endTime.getTime() - startTime.getTime();
  // console.log(diff);

  emitter.on('oneSecondPassed', () => {
    diff = diff - 1000;
    if (diff > 0) {
      logText += `До истечения времени таймера № ${i + 1} осталось:
      ${Math.floor((diff / 1000) % 60)} сек. 
      ${Math.floor((diff / 1000 / 60) % 60)} мин.
      ${Math.floor((diff / (1000 * 60 * 60)) % 24)} ч.
      ${Math.floor(diff / (1000 * 60 * 60 * 24))} д.;
      `;
      timersFinished[i] = false;
    } else {
      logText += `Время таймера № ${i + 1} истекло`;
      timersFinished[i] = true;
    }
  })
};

let interval = setInterval(() => {
  emitter.emit('oneSecondPassed');

  if (timersFinished.includes(false)) {
    console.log(logText);
    logText = '';
  } else {
    console.log('Время всех таймеров истекло');
    clearInterval(interval);
  }
}, 1000);



