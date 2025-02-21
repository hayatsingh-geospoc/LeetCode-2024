let arr1 = [2, 5, 3, 8, 4];

let arr2 = [5, 6, 4, 7, 1];

for (let i = 0; i < arr2.length; i++) {
  arr1.push(arr2[i]);
}

// let sortedArr = newArr.sort((a, b) => {
//   return a - b;
// });

console.log(arr1);
