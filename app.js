require('dotenv').config();
const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  MongoClient.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (error) => {
    if (error) {
      throw error;
    };
    console.log("Connected to `" + process.env.DATABASE_NAME + "`!");
  });
});