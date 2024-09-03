const assert = require('assert');

let str = 'the lazy frog jump into the wolf';
let strArr = str.split('');
let vowel = ['a', 'e', 'i', 'o', 'u'];

let countVowel = (vowel) => {
  let count = 0;
  strArr.forEach((element) => {
    vowel.includes(element) && count++;
  });
  return count;
};

console.log(countVowel(vowel));

strArr = 'the lazy frog jump into the wolf'.split('');

assert.strictEqual(countVowel(vowel), 11, 'Test Case 1 Failed');
