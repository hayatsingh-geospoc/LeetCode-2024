let str = 'Dear hayat you are the best';

// let reverseString = (str) => {
//   if (str.length === 1) {
//     return str;
//   }
//   if (str.length === '') {
//     return '';
//   }
//   let arrStr = str.split(' ');
//   let reverseString = arrStr.map((data) => {
//     return data.split('').reverse().join('');
//   });
//   return reverseString;
// };

// console.log(reverseString(str));

// second approach

let arrStr = str.split('');
console.log(arrStr);

let tempArr = [];

for (let i = arrStr.length; i >= 0; i--) {
  console.log(arrStr[i]);
  tempArr.push(arrStr[i]);
}

console.log(tempArr);
