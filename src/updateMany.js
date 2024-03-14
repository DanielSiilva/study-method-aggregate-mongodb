const mongoose = require("mongoose");
const shemaDb = require("./shema");

const model = mongoose.model("heros", shemaDb);

//Atualizar múltiplos documentos: Atualizar todos os documentos que correspondem ao critério.
async function MetodoUpdateMany() {
  try {
    const updateMany = model.updateMany({});

    console.log("Metodo updateMany", updateMany);
  } catch (error) {
    console.error(error);
  }
}

module.exports = MetodoUpdateMany;
