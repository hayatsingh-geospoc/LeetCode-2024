// let functionPromises = (success) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         return resolve('Promises resolved');
//       } else {
//         return reject('Promise rejected');
//       }
//     },5000);
//   });
// };

// functionPromises(false)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   console.log('Promise is still pending...');

// Promise.all and Promise.allsettled

// let promiseAll = (data) => {
//   return new Promise((resolve, reject) => {

//   });
// };

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise1');
  }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise2');
  }, 4000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise3');
  }, 5000);
});

let promiseAllArray = [promise1, promise2, promise3];

Promise.all(promiseAllArray)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

// function abc(dd) {
//   console.log(dd);
// }

// let data = new abc('bbb');

// data

