const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

let arr = [];

app.post('/', (req, res) => {
  let obj = {};
  let { name, password, id } = req.body;

  obj.name = name;
  obj.password = password;
  obj.id = id;
  arr.push(obj);

  return res.status(200).send({
    status: true,
    message: arr,
  });
});

app.get('/', (req, res) => {
  return res.status(200).send({
    status: true,
    message: arr,
  });
});

const users = [
  { id: '1', name: 'John', password: 'pass123' },
  { id: '2', name: 'Alice', password: 'pass456' },
  { id: '3', name: 'Bob', password: 'pass789' },
];

app.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, password } = req.body; // Extract `name` and `password` from request body

  console.log('users', users);

  let userIndex = users.findIndex((user) => {
    return user.id == id;
  });

  if (userIndex === -1) {
    return res.status(404).send({
      status: false,
      message: 'User not found',
    });
  }
  users[userIndex].name = name;
  users[userIndex].password = password;

  return res.status(201).send({
    status: true,
    message: users,
  });
});

app.delete('/:id', (req, res) => {
  let { id } = req.params;
  let newData = users.filter((data) => {
    return data.id != id;
  });
  return res.status(201).send({
    status: true,
    message: newData,
  });
});

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3031');
});
