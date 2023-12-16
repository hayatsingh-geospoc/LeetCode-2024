var expect = function (val) {
   function  toBe(data) {
      if (data === val) {
        return true;
      } else {
        throw new Error('Not Equal');
      }
    };

     function notToBe(data) {
      if (data !== val) {
        return true;
      } else {
        throw new Error('Equl');
      }
    };
  return {toBe,notToBe};
};

console.log(expect(5).toBe(6));



