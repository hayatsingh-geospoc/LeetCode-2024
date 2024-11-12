// Promises basically its an object which we use to handle asynchronous behaviours

// it has 2 states resolve and rejected
// fullfill
// reject
// pending

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if ('') {
      resolve('working resolve');
    } else {
      reject('working rejected');
    }
  }, 3000);
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);

    
  });

// const myPromise = new Promise((resolve, reject) => {
//   const success = true; // Simulate success or failure

//   // Simulating an asynchronous operation using setTimeout
//   setTimeout(() => {
//     if (success) {
//       resolve('Promise resolved successfully!'); // Resolve the promise
//     } else {
//       reject('Promise rejected due to an error!'); // Reject the promise
//     }
//   }, 2000); // 2-second delay to simulate async behavior
// });

// myPromise
//   .then((message) => {
//     console.log(message); // This runs if the promise is resolved
//   })
//   .catch((error) => {
//     console.log(error); // This runs if the promise is rejected
//   });
