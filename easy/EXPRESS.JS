const express = require('express');
const app = express();
let port = 4004;

app.get('/health', (req, res) => {
  return res.status(200).send({
    status: true,
    data: 'OK',
  });
});









app.listen(port, () => {
  console.log(`the port is running on ${port} `);
});
