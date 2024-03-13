const mongoose = require("mongoose");
const shemaDb = require("./shema");

const model = mongoose.model("heros", shemaDb);

async function MetodFind() {
  try {
    const documentos = await model.find({});

    console.log("Metodo find", documentos);
  } catch (error) {}
}

module.exports = MetodFind;
