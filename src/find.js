const mongoose = require("mongoose");
const shemaDb = require("./shema");

const model = mongoose.model("heros", shemaDb);

async function MetodFind() {
  try {
    //Buscar todos os documentos: Para buscar todos os documentos na coleção.
    const findAll = await model.find({});

    //Buscar documentos por critério: Encontrar todos os documentos que correspondem a um critério específico.
    const findUnique = await model.find({ name: "Iron Man" }).exec();

    console.log("Metodo find - Todos", findAll);

    console.log("Metodo find - unico", findUnique);
  } catch (error) {}
}

module.exports = MetodFind;
