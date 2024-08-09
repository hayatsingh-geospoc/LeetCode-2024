// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

let expect = function (val) {
  function toBe(data) {
    if (data === val) {
      return true;
    } else {
      throw new Error('Not Equal');
    }
  }

  function notToBe(data) {
    if (data !== val) {
      return true;
    } else {
      throw new Error('Not Equal');
    }
  }
  return { toBe, notToBe };
};

// console.log(expect(5).toBe(6));

let expectTobe = (val) => {
  function toBe(data) {
    if (val == data) {
      return true;
    } else {
      return new Error('Not Equal');
    }
  }
  function notToBe(data) {
    if (data !== val) {
      return true;
    } else {
      return new Error('Equal');
    }
  }

  return { toBe, notToBe };
};

console.log(expectTobe(5).toBe(5));
console.log(expectTobe(5).notToBe(7));

