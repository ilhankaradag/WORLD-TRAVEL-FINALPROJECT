const express = require('express');
const app = express();
const port = 7000;
const cors = require('cors');
const connections = require('./connections');
const hotelsRoute = require('./routes/hotels');
// const authRoute = require('./routes/auth');
// const usersRoute = require('./routes/users');
// const hotelsRoute = require('./routes/hotels');
// const roomsRoute = require('./routes/rooms');

// middleware

app.use(express.json());
app.use(cors());
// app.use('/api/auth', authRoute);
// app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
// app.use('/api/rooms', roomsRoute);

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
