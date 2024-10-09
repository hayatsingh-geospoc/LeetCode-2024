// create a server 3000 and handle 10 requests one by one show how responses fetched , explain how it works

const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log(`the server is running on port ${3000}`);
});

app.get('/healthcheck', (req, res) => {
  return res.send('Working');
});
