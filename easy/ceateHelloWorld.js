
// This function takes an arg and always returns "Hello World" //

let createHelloWorld = () => {
  return function (arg) {
    return 'Hello World';
  };
};
console.log(createHelloWorld())
