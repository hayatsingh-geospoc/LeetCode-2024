// Streams in nodejs basically transforming data

const { error } = require('console');
const fs = require('fs');

// Create a readable stream
// const readStream = fs.createReadStream('data.txt', 'utf8');

// readStream.on('data', (chunk) => {
//   console.log('Received chunk:', chunk);
// });

// readStream.on('error', (err) => {
//   console.error('Error:', err);
// });

// readStream.on('end', () => {
//   console.log('Finished reading file.');
// });

// Write Stream

// let writeStream = fs.createWriteStream('../JS/data.txt');

// writeStream.write('Hello javascript');

// writeStream.end('end', () => {
//   console.log('Ended');
// });

// writeStream.on('error', (error) => {
//   console.log(error);
// });

// Duplex

const readstream = fs.createReadStream('data.txt', 'utf-8');
const writeStream = fs.createWriteStream('output.txt');

readstream.pipe(writeStream);
console.log('Piping completed.');
