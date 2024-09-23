let arr = [1, 3, 2, [4, 6, 8, [5, 6, 7, 2]]];

const oneDimensionalArray = (arr) => {
  let result = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(oneDimensionalArray(element));
    } else {
      result.push(element);
    }
  });
  return result;
};

console.log(oneDimensionalArray(arr));
