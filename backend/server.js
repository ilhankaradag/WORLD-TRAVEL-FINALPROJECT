const express = require('express');
const app = express();
const connections = require('./connections');
app.use(express.json());

const port = 7000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
