const mongoose = require("mongoose");

const shemaDb = new mongoose.Schema({
  name: String,
  power: String,
});

module.exports = shemaDb;
