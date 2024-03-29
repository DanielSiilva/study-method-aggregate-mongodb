require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const shemaDb = require("./shema");
const MetodFind = require("./find");
const MetodAggregation = require("./aggregate");
const MetodUpdateOne = require("./updateOne");
const MetodoUpdateMany = require("./updateMany");
const MetodoDeleteOne = require("./deleteOne");
const MetodoDeleteMany = require("./deleteMany");
const MetodoAggregateProject = require("./aggregateProject");
const app = express();

mongoose
  .connect(process.env.MONGOBD_URL)
  .then(() => {
    console.log("Connected to mongobd");
    app.listen(3002, () => {
      console.log("Server is running on port 3002");
    });
  })
  .catch((error) => {
    console.log("connection failed", error);
  });

//const model = mongoose.model("heros", shemaDb);

(async () => {
  try {
    await MetodFind();
    await MetodAggregation();
    await MetodUpdateOne();
    await MetodoUpdateMany();
    await MetodoDeleteOne();
    await MetodoDeleteMany();
    await MetodoAggregateProject();
  } catch (err) {
    console.error(err);
  }
})();
