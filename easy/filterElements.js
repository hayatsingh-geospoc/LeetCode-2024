let filerEle = (arr, fn) => {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if ((fn(arr[i]), i)) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
};

const arr = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;
let result = filerEle(arr, isEven);

console.log(result);
