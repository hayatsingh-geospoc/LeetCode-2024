const express = require('express');
const app = express();

app.use(express.json()); // parse the request data in json format;

let arr = [];
let obj;
//create ID
app.post('/', (req, res) => {
  let { id, name, password } = req.body;
  obj = {
    id: id,
    name: name,
    password: password,
  };
  arr.push(obj);
  return res.status(201).send({
    status: true,
    msg: arr,
  });
});

// get the data
app.get('/', (req, res) => {
  return res.status(200).send({
    status: true,
    msg: arr,
  });
});

// update the data
app.put('/:id', (req, res) => {
  let id = req.params.id;
  let { name, password } = req.body;

  console.log(typeof id, name, password);
  const itemIndex = arr.findIndex((item) => {
    console.log(typeof item.id, 'id');
    return item.id === id;
  });

  console.log(itemIndex);

  if (itemIndex === -1) {
    return res.status(404).send({
      success: false,
      message: 'Item not found.',
    });
  }

  if (name || password) {
    arr[itemIndex].name = name;
    arr[itemIndex].password = password;
    return res.status(201).send({
      status: true,
      msg: arr,
    });
  }
});

app.delete('/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  arr = arr.filter((data) => {
    return data.id !== id;
  });
  return res.status(200).send({
    status: true,
    msg: arr,
  });
});

let port = 4004;

app.listen(port, () => {
  console.log(`the port is on ${port}`);
});
