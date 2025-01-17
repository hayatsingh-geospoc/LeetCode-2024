let string = 'hi my name is khan and i am not a terrorist';

let upperCaseFunc = (data) => {
  let newStr = data.split(' ');
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
  }
  return newStr;
};

console.log(upperCaseFunc(string));
