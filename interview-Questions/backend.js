// // write code to additon of elements using loop and without for loop

// //const { resolve } = require('path');

// // let arr = [1, 2, 3, 4, 5];

// // let sum = arr.reduce((strt, acc) => {
// //   return strt + acc;
// // }, 0);

// // console.log(sum);

// // console.log('A');

// // (async () => {
// //   await new Promise((resolve) => {
// //     setTimeout(() => {
// //       console.log('B');
// //       resolve();
// //     }, 3000);
// //   });
// //   console.log('C');
// // })();

// // (async () => {
// //   await new Promise((resolve) => {
// //     setTimeout(() => {
// //       console.log('B');
// //       resolve();
// //     }, 3000);
// //   });
// //   console.log('C');
// // })();

// // (async () => {
// //   console.log('A');

// //   await new Promise((resolve) => {
// //     setTimeout(() => {
// //       console.log('B');
// //       resolve();
// //     }, 0);
// //   });

// //   console.log('C');
// // })();

// // (async () => {
// //   console.log('first');

// //   await new Promise((resolve) => {
// //     setTimeout(() => {
// //       console.log('Delayed message');
// //       resolve();
// //     }, 5000);
// //   });

// //   console.log('second');
// // })();

// // (async () => {
// //   console.log('first');
// //   await new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve();
// //     }, 5000);
// //   });
// //   console.log('second');
// // })();

// // new Promise((resolve) => {
// //   console.log('A');
// //   setTimeout(() => {
// //     resolve();
// //   }, 5000);
// // }).then(() => {
// //   console.log('B');
// // });

// console.log('Start');

// setTimeout(() => {
//   console.log('timeout');
// }, 0);

// setImmediate(() => {
//   console.log('Immidiate');
// });

// console.log('End');

// console.log('a');
// setTimeout(() => console.log('set'), 10); // async
// Promise.resolve(() => console.log('pro')).then((res) => res()); //
// console.log('b');

// // 1st a
// //    b
// //    pro
// //     set

// fs.createReadStream("file.txt", 'utf-8')
// fs.createReadStream('file.txt', 'utf-8');

// const array1 = ['a', 'b', 'c'];
// const array2 = [1, 2, 3];

// ['a', 1, 'b', 2, 'c', 3];

// for (let i = 0; i <= array1.length - 1; i++) {
//   let odd = array1.length / 2 == 0;
//   if (odd) {
//     array1.(0,);
//   }
// }

// console.log(array1);

// const arr = [10, 5, 9, 2, 8];
// //Find 2nd largest element.

// arr.sort((a, b) => {
//   return a - b;
// });

//console.log(arr[arr.length - 2]);

// 8 balls 7 balls weight are same

//1 has less weight

//   3 - 3   -
//  1 - 1

// function abc() {
//   console.log(a); // undefined
//   console.log(b);
//   console.log(c);

//   let b = 5;
//   const c = 6;

//   var a = 1;
// }

// abc();

let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
let newArr;

// for (let i = 0; i <= arr1.length - 1; i++) {
//   newArr.push(arr1[i]);
//   newArr.push(arr2[i]);
// }

// console.log(newArr);

// newArr = arr1.map((arr, index) => {
//   console.log(arr, arr2[index]);
//   return [arr, arr2[index]];
// });

//console.log(newArr.flat());

newArr = arr1.reduce((acc, item, index) => {
  acc.push(item, arr2[index]);
  return acc;
}, []);

console.log(newArr);
