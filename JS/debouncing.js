// Debouncing

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Example: Simulating API request in Node.js
const fetchData = debounce(() => {
  console.log('Fetching data...');
}, 1000);

// Simulating multiple calls
fetchData();
fetchData();
fetchData();

// Only the last call after 1 second will execute
setTimeout(fetchData, 1500); // This will execute after 1.5s
