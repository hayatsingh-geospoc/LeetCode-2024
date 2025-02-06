const express = require('express');
const app = express();
const cors = require('cors');
const limit = require('express-rate-limit');

app.use(express.json());
app.use(
  cors({
    origin: 'url',
    method: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.get('/', (req, res) => {
  return res.status(200).send('Hello World!');
});

app.get('/data/:id', (req, res) => {
  let { id } = req.params;
  console.log(id);
  return res.status(200).send({
    status: true,
    message: id,
  });
});

let limiter = limit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: 'Too many requests',
});

app.use('/api', limiter); // Apply limiter only to '/api' routes

app.get('/api', (req, res) => {
  res.send('This is a rate-limited API endpoint.');
});

app.get('/', (req, res) => {
  res.send('Welcome! This route is not rate-limited.');
});

let port = 4041;
app.listen(port, () => {
  console.log('the port is running on 4041');
});
