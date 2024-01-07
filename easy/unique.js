function removeUniqueElements(arr) {
  return arr.filter((value, index, array) => {
    return array.indexOf(value) !== array.lastIndexOf(value);
  });
}

// Example usage:
const originalArray = [1, 2, 3, 4, 1, 2, 5, 6, 7];
const arrayWithDuplicates = removeUniqueElements(originalArray);

console.log(arrayWithDuplicates);
