function a(aa) {
  console.log('1st');
  aa(() => {
    console.log('2nd');
  });
}

function b(callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Hi, I am function b');
      // Call the callback after the timeout
    }, 3000);
  });
}

a(b);
