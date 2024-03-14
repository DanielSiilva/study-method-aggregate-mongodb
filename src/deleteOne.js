const mongoose = require("mongoose");
const shemaDb = require("./shema");

const model = mongoose.model("heros", shemaDb);

async function MetodoDeleteOne() {
  try {
    const deleteOne = model.deleteOne({ name: "Iron Man" });

    console.log("deleteOne", deleteOne);
  } catch (error) {
    console.log(error);
  }
}

module.exports = MetodoDeleteOne;
