let str = 'Dear hayat you are the best';

let reverseString = (str) => {
  if (str.length === 1) {
    return str;
  }
  if (str.length === '') {
    return '';
  }
  let arrStr = str.split(' ');
  let reverseString = arrStr.map((data) => {
    return data.split('').reverse().join('');
  });
  return reverseString;
};

console.log(reverseString(str));
