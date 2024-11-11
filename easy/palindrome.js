// check the string is palindrome or not
//  example: 111 , 9009 , 151


let palindromeNumber  =  515;
palindromeNumber = palindromeNumber.toString();
//console.log(palindromeNumber.split(''))

let str = ''
for(let i = 0; i<=palindromeNumber.length-1;i++){
    str = str  + palindromeNumber[i];
};

console.log(str == palindromeNumber);




let palindromeFunction = (number)=> {
let str = number.toString();
let palindromeReverse = str.split('').reverse().join('');
return palindromeReverse;
};

console.log(palindromeFunction(67676))
