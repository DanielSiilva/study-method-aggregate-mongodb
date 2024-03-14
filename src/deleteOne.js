const mongoose = require("mongoose");
const shemaDb = require("./shema");

const model = mongoose.model("heros", shemaDb);

//Deletar um documento específico: Deletar o primeiro documento que corresponde ao critério.

async function MetodoDeleteOne() {
  try {
    const deleteOne = model.deleteOne({ name: "Iron Man" }).exec();

    console.log("deleteOne", deleteOne);
  } catch (error) {
    console.log(error);
  }
}

module.exports = MetodoDeleteOne;
