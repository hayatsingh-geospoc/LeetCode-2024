const createCounter = (init) => {
  let obj = {
    increment: () => {
      let count = init;
      count++;
      return count;
    },
    decrement: () => {
      let count = init;
      count--;
      return count;
    },
    reset: () => {
      let count = init;
      return count;
    },
  };

  return obj;
};

console.log(createCounter(6).increment());
console.log(createCounter(3).decrement());
console.log(createCounter(8).reset());
console.log(createCounter(9).increment());
