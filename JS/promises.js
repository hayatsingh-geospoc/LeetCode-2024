let functionPromises = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        return resolve('Promises resolved');
      } else {
        return reject('Promise rejected');
      }
    },5000);
  });
};

functionPromises(false)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

  console.log('Promise is still pending...');