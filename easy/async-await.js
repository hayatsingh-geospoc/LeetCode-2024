// write a code which shows pending reject fullfilled using async await .

function promiseReturn(status) {
  return new Promise((rej, res) => {
    if (status == 'fullfilled') {
      console.log('working');
      setTimeout(() => res('Promise fullfilled'), 1000);
    } else if ((status = 'Rejected')) {
      setTimeout(() => rej('Promise rejected'), 1000);
    } else {
      console.log('Promise is pending...');
    }
  });
}

async function testPromise(status) {
  try {
    let data = await promiseReturn(status);
    console.log(data);
  } catch (error) {}
}

console.log(testPromise('fullfilled'));
