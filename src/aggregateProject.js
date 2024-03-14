const mongoose = require("mongoose");
const shemaDb = require("./shema");

const model = mongoose.model("heros", shemaDb);

//Projetar e renomear campos: Selecionar e possivelmente renomear campos de documentos que correspondem a um critério.
async function MetodoAggregateProject() {
  try {
    const project = model
      .aggregate([
        { $match: { name: "Iron Man" } },
        { $project: { nome: "$name", superPoder: "$power", _id: 0 } },
      ])
      .exec();

    console.log("project", project);
  } catch (error) {
    console.error(error);
  }
}

module.exports = MetodoAggregateProject;
