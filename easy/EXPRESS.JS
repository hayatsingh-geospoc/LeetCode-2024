const express = require('express');
const app = express();
let port = 4004;

app.use(express.json());

// Health check API
app.get('/health', (req, res) => {
  return res.status(200).send({
    status: true,
    data: 'OK',
  });
});

let arr = []; // In-memory array to store data

// Create API
app.post('/', (req, res) => {
  const { id, name, password } = req.body;

  // Validation
  if (!id || !name || !password) {
    return res.status(400).send({
      status: false,
      error: true,
      message: 'All fields (id, name, password) are required!',
    });
  }

  // Create object and push to array
  const obj = { id: String(id), name, password }; // Ensure `id` is stored as a string
  arr.push(obj);

  return res.status(201).send({
    status: true,
    data: obj,
  });
});

// Get API
app.get('/', (req, res) => {
  return res.status(200).send({
    status: true,
    data: arr,
  });
});

// Update API
app.put('/:id', (req, res) => {
  const id = req.params.id; // Extract `id` from the URL
  const { name, password } = req.body;

   console.log(id,arr)
  // Find the object in the array by `id`
  const objIndex = arr.findIndex((item) => {
    return item.id == id;
  })
  console.log("objIndex",objIndex)
   

  if (objIndex === -1) {
    return res.status(404).send({
      status: false,
      error: true,
      message: 'ID not found!',
    });
  }

  // Update the object properties
  if (name || password){
    arr[objIndex].name = name;
  }
  

  return res.status(200).send({
    status: true,
    data: arr[objIndex], // Return the updated object
  });
});

// Delete API
app.delete('/:id', (req, res) => {
  const id = req.params.id;

  // Find and remove object by ID
  const initialLength = arr.length;
  arr = arr.filter((item) => item.id !== id);

  if (arr.length === initialLength) {
    return res.status(404).send({
      status: false,
      error: true,
      message: 'ID not found!',
    });
  }

  return res.status(200).send({
    status: true,
    message: 'Record deleted successfully!',
  });
});

// Start server
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
