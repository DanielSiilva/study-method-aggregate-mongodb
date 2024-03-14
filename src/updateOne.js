const mongoose = require("mongoose");
const shemaDb = require("./shema");

const model = mongoose.model("heros", shemaDb);

//Atualizar um documento específico: Atualizar o primeiro documento que corresponde ao critério.
async function MetodUpdateOne() {
  try {
    const updateOne = await model
      .updateOne(
        { name: "Iron Man" },
        { $set: { power: "Teste de updateOne" } }
      )
      .exec();

    console.log("updateOne", updateOne);
  } catch (error) {
    console.error(error);
  }
}

module.exports = MetodUpdateOne;
