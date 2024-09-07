// Sum of digits  ex , 36634 = 3+6+6+3+4;

let number = 364;

let strNum = 36324 + '';
let tmpStr = '';
let result = 0;
let arr = strNum.split('');

// arr.forEach((element) => {
//   result = result + Number(element);
// });

for (let i = 0; i <= arr.length - 1; i++) {
  result = result + Number(arr[i]);
}

console.log(result);
