// // Promises basically its an object which we use to handle asynchronous behaviours

// // it has 2 states resolve and rejected
// // fullfill
// // reject
// // pending

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if ('') {
//       resolve('working resolve');
//     } else {
//       reject('working rejected')
//     }
//   }, 3000);
// });

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err);

    
//   });

// // const myPromise = new Promise((resolve, reject) => {
// //   const success = true; // Simulate success or failure

// //   // Simulating an asynchronous operation using setTimeout
// //   setTimeout(() => {
// //     if (success) {
// //       resolve('Promise resolved successfully!'); // Resolve the promise
// //     } else {
// //       reject('Promise rejected due to an error!'); // Reject the promise
// //     }
// //   }, 2000); // 2-second delay to simulate async behavior
// // });

// // myPromise
// //   .then((message) => {
// //     console.log(message); // This runs if the promise is resolved
// //   })
// //   .catch((error) => {
// //     console.log(error); // This runs if the promise is rejected
// //   });



// var largestRectangleArea = function(heights) {

//   let highestRect = heights[0]
//   let largestRec;

//   for(let i=1; i<=heights.length-1; i++){
//       if(heights[i] > highestRect){
//           highestRect = heights[i]
//       }
//      largestRec  = highestRect * 1
//   }
//   console.log(largestRec)
//   return largestRec
// }

// let aa = [2,5,6,2,3]
// largestRectangleArea(aa)



// const a = [{name:'a',age:20}]
// const b = [...a,{name:'b',age:30}]
// b[0].name='c'
// b[1].name='d'

// console.log(b)


// const a = {name:'a',age:20}
// const b = [{...a},{name:'b',age:30}]
// b[0].name='c'
// b[1].name='d'


// [{
//   name:'a',age:20
// }]

// [{{
//   name:'a',age:20
// }},   {name:'b',age:30}]

// function Person(name) {
//   this.name = name;
//   this.greet = function() {
//     console.log(`Hello, ${this.name}`);
//   };
// }
//   greet2 = () =>  {
//     console.log(`Hello, ${this.name}`);
//   };


// const john = new Person('John');
// john.greet();
// greet2();


// function Person(name) {
//   this.name = name;
//   this.greet = function() {
//     console.log(`Hello, ${this.name}`);
//   };
// }

// greet2 = () =>  {
//     console.log(`Hello, ${this.name}`);
//   };

// greet3 = function() {
//     console.log(`Hello, ${this.name}`);
//   };
// const john = new Person('John');
// john.greet();
// greet2();
// greet3();

// console.log(1);


setTimeout(() => {
  console.log('Timeout');
});

setImmediate(() => {
  console.log('Immediate');
});

// Promise.resolve().then(() => {
//   console.log('Promise');
// });

// process.nextTick(() => {
//   console.log('NextTick');
// });




// process.nextTick(() => {
//   console.log(4);
// });

// console.log(5);

// 1
// 5
// 4
// 2
//3




