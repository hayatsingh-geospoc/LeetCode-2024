let array = [7, 3, 3, 4, 5, 4, 3, 6, 44, 5];

let maxEle = array[0];
let minEle = array[0];

// array.forEach((element)

for (let i = 0; i <= array.length - 1; i++) {
  if (array[i] < minEle) {
    minEle = array[i];
  }
}

console.log(minEle);
