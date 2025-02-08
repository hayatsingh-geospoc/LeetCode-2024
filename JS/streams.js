let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolve');
  }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolve');
  }, 4000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

Promise.all([promise1, promise2, promise3])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
