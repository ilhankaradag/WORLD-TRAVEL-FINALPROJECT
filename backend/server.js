const express = require('express');
const app = express();
const connections = require('./connections');
const cors = require('cors');

const port = 7000;

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
