// function removeUniqueElements(arr) {
//   return arr.filter((value, index, array) => {
//     return array.indexOf(value) !== array.lastIndexOf(value);
//   });
// }

// // Example usage:
// const originalArray = [1, 2, 3, 4, 1, 2, 5, 6, 7];
// const arrayWithDuplicates = removeUniqueElements(originalArray);

// console.log(arrayWithDuplicates);

let array = [4, 5, 6, 2, 4, 6, 5, 4];

// let uniqueElements = (arr) => {
//   return arr.filter((ele, index, arrays) => {
//     //console.log(arrays);
//     return arrays.indexOf(ele) == array.lastIndexOf(ele);
//   });
// };

// console.log(uniqueElements(array));

function getUniqueElements(arr) {
  return arr.filter((item, index, array) => {
    return array.indexOf(item) === array.lastIndexOf(item);
  });
}

// Example usage
//let array = [1, 2, 3, 2, 4, 5, 6, 3, 3, 4];
let uniqueElements = getUniqueElements(array);

//console.log(uniqueElements);

let arr = [3, 4, 6, 4, 7, 4, 7, 5, 8, 6, 7, 8, 6, 5];

let uniqueArr = [...new Set(arr)];

console.log(uniqueArr);
