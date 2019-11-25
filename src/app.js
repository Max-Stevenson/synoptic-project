require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.listen(3000, () => {
  mongoose.connect(process.env.MONGODB_URL, {useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
    if (error) {
      throw error;
    };
    console.log("Connected to `" + process.env.DATABASE_NAME + "`!");
  });
});