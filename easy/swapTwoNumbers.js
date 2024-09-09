//Swapping using third varibale.

let a = 2;
let b = 3;
let c;

c = a; // 2
a = b; // 3
b = c; // 2
console.log(a, b);

// Uisng Xor operator
b = a ^ b; // 1
a = a ^ b; // 3
b = a ^ b; // 2
console.log(a, b);
