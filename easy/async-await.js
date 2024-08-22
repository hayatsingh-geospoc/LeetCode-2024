// write a code which shows pending reject fullfilled using async await .

// Example function that returns a promise which resolves, rejects, or stays pending

function examplePromise(status) {
  return new Promise((resolve, reject) => {
    if (status === 'fulfilled') {
      setTimeout(() => resolve('Promise fulfilled!'), 1000); // Fulfills the promise after 1 second
    } else if (status === 'rejected') {
      setTimeout(() => reject('Promise rejected!'), 1000); // Rejects the promise after 1 second
    } else {
      // Keeps the promise in pending state (by not calling resolve or reject)
      console.log('Promise is pending...');
    }
  });
}

// Async function to test the promise behavior
async function testPromise(status) {
  try {
    const result = await examplePromise(status);
    console.log(result); // Logs "Promise fulfilled!" if the promise is fulfilled
  } catch (error) {
    console.error(error); // Logs "Promise rejected!" if the promise is rejected
  }
}

// Test cases:

// 1. Fulfilled promise
//testPromise('fulfilled'); // After 1 second, logs "Promise fulfilled!"

// 2. Rejected promise
// testPromise('rejected'); // After 1 second, logs "Promise rejected!"

// // 3. Pending promise
// testPromise('pending'); // Logs "Promise is pending...", promise stays in pending state

// function foo() {
//   console.log('this', this, 'this');
// }

// foo();

console.log(1+[43,45])
