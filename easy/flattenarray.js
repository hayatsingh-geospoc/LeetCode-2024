let arr = [1, 2, 3, 4, [6, 7, [7, 5, 6, 44]]];

let flattenArr = (arr) => {
  let newArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flattenArr(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(flattenArr(arr));
