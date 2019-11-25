require('dotenv').config();
const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const app = express();

app.use(express.json());

app.listen(3000, () => {
  MongoClient.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (error) => {
    if (error) {
      throw error;
    };
    console.log("Connected to `" + process.env.DATABASE_NAME + "`!");
  });
});