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
