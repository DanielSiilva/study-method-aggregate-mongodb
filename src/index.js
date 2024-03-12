require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

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
