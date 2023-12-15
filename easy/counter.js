// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

let num = 5;
const counter = (num) => {
  let count = num;

  function counter() {
    return count++;
  }
  return counter;
};

let d = counter(num);
console.log(d())
console.log(d());
console.log(d());
