let arr = [5, 6, 7, [75, 94, 9, [7, 8, 2]]];

// // let flattenArray = (arr)=> {
// //     let arrr = [];
// //     for (let i = 0; i < arr.length; i++) { // Corrected condition: Use < instead of <=
// //         if (Array.isArray(arr[i])) {
// //             arrr = arrr.concat(flattenArray(arr[i])); // Recursively flatten nested arrays
// //         } else {
// //             arrr.push(arr[i]); // Push non-array elements into the result
// //         }
// //     }
// //     return arrr; // Return the flattened array
// // }

// // let d = flattenArray(arr);
// // console.log(d); // Output: [5, 6, 7, 75, 94, 9, 7, 8, 2]

let flattenArray = (arr) => {
  let newArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flattenArray(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

let data = flattenArray(arr);

console.log(data);
