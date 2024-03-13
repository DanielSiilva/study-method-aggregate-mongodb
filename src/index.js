require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const shemaDb = require("./shema");

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

const model = mongoose.model("heros", shemaDb);

async function searchData() {
  try {
    const documentos = await model.find({});
    // console.log("documentos", documentos);

    const filter = await model
      .aggregate([{ $match: { name: "Hulk" } }, { $count: "total_doc" }])
      .exec();

    console.log("Filter", filter);
  } catch (err) {
    console.error(err);
  }
}

(async () => {
  try {
    await searchData();
  } catch (err) {
    console.error(err);
  }
})();
