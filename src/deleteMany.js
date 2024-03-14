const mongoose = require("mongoose");
const shemaDb = require("./shema");

const model = mongoose.model("heros", shemaDb);

//Deletar múltiplos documentos: Deletar todos os documentos que correspondem ao critério.
async function MetodoDeleteMany() {
  try {
    const deleteMany = model.deleteMany({ name: "Iron Man" }).exec();

    console.log("deleteMany", deleteMany);
  } catch (error) {
    console.error(error);
  }
}

module.exports = MetodoDeleteMany;
