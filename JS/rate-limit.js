/* What is Rate-Limiting ? How to implement  in nodejs ? what are the advantages and disadvantages

 So RL is basically a technique where we set the limited no of request in the server at a particular no of time to prevent from different different attacks on the server 
 
 like  Brute force attack , DDOs and in nodejs we can implememt this using a lib npm express-rate-limit and create a middleware for every request

*/

const express = require('express');
const app = express();
const limiter = require('express-rate-limit');

app.use(express.json());

const limterFunc = limiter({
  windowMs: 60 * 1000,
  limit: 5,
  message: 'Too many requests',
});

app.get('/data', limterFunc, (req, res) => {
  return res.status(200).send({
    status: true,
    message: 'Completed',
  });
});

app.listen(5050, () => {
  console.log('server is running on port 5050');
});



