function a(aa) {
  console.log('1st');
  aa().then(() => {
    console.log('2nd');
  });
}

function b() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Hi, I am function b');
      resolve(); // Call the callback after the timeout
    }, 3000);
  });
}

a(b);
