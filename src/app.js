require('dotenv').config();
require('./db/mongoose');
const express = require("express");
const userRouter = require('./routers/user');
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/api/v1', userRouter);

app.listen(port, () => {
  console.log('Server up on port: ' + port);
});