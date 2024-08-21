// write a code which shows pending reject fullfilled using async await .

function PromiseReturn(status) {
  return new Promise((rej, res) => {
    if (status == 'fullfilled') {
      setTimeout(() => res('Promise fullfilled'), 1000);
    } else if ((status = 'Rejected')) {
      setTimeout(() => rej('Promise rejected'), 1000);
    } else {
      console.log('Promise is pending...');
    }
  });
}


async 
