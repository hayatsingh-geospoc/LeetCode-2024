// let maxEle = (arr) => {
//   let maxEle = arr[0];
//   arr.forEach((ele) => {
//     if (ele > arr[0]) {
//       maxEle = ele;
//     }
//   });
//   return maxEle;
// };

// let arr = ['3', '5', '7', '2'];

// console.log(maxEle(arr));



let arr = [2,5,8,3,9,4,11,15,5,9,0];
let maxEle = arr[0];

for(let i=0; i<=arr.length-1; i++) {
  if(arr[i] > maxEle) {
    maxEle = arr[i];
  }
}

console.log(maxEle)
