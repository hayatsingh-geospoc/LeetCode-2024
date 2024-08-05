// This function takes an arg and always returns "Hello World" //

let createHelloWorld = () => {
  return function (arg) {
    return 'Hello World';
  };
};


// alternate approach //

let createHelloWorld1 = () => (args) => {
  'Hello World';
};

console.log(createHelloWorld1());
