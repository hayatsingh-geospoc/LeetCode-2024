// Closure and Lexical Scope

let closurFunc = (data) => {
  let data1 = data;
  function child() {
    let data2 = 5;
    return data1 + data2;
  }
  return child();
};


console.log(closurFunc(5))
