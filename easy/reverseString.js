let str = 'Hi this is harry form India';

let arrStr = str.split(' ');

let reverseString = arrStr.map((data) => {
  return data.split('').reverse().join('');
});

console.log(reverseString);
