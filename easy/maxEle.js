let maxEle = (arr) => {
  let maxEle = arr[0];
  arr.forEach((ele) => {
    if (ele > arr[0]) {
      maxEle = ele;
    }
  });
  return maxEle;
};

let arr = ['3', '5', '7', '2'];

console.log(maxEle(arr));
