let arr = [1, 3, 2, [4, 6, 8, [5, 6, 7, 2]]];

const oneDimensionalArray = (arr) => {
  if (Array.isArray(arr)) {
    console.log('working');
  }
};

console.log(oneDimensionalArray(arr));
