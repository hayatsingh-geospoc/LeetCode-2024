let str =
  'Hi my name is hayat i was in Chandigarh and i love Komal but she loves someone else';

let newStr = str.split(' ');

let maxStr = newStr[0];
for (let i = 1; i < newStr.length; i++) {
  if (newStr[i].length > maxStr.length) {
    maxStr = newStr[i];
  }
};


console.log(maxStr);


