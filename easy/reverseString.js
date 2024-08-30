let str = 'Hi this is harry form India';

let arrStr = str.split(" ");

arrStr.map((data)=>{
   return data.split(',');
})

console.log(arrStr);
