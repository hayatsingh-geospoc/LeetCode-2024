// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

let transFormedArray = (arr, fn) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(fn(arr[i], i));
    array.push(fn(arr[i], i));
  }
  return array;
};
let arr = [1, 2, 3];
const fn = (ele, ind) => ele * ind;
let result = transFormedArray(arr, fn);
console.log(result);

// function mapArray(arr, fn) {
//   // Initialize a new array to hold the transformed values
//   const transformedArray = [];

//   // Loop through each element in the original array
//   for (let i = 0; i < arr.length; i++) {
//     // Apply the function 'fn' to each element along with its index
//     transformedArray.push(fn(arr[i], i));
//   }

//   // Return the transformed array
//   return transformedArray;
// }

// // Example usage:

// // Array
// const arr = [1, 2, 3];

// // Mapping function that multiplies each element by its index
// const fn = (element, index) => element * index;

// // Applying the transformation
// const result = mapArray(arr, fn);

// console.log(result); // Output: [0, 2, 6]
