require('dotenv').config();
require('./db/mongoose');
const cors = require('cors');
const express = require("express");
const userRouter = require('./routers/user');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1', userRouter);

module.exports = app;