const mongoose = require("mongoose");
const shemaDb = require("./shema");

const model = mongoose.model("heros", shemaDb);

async function MetodAggregation() {
  try {
    const filter = await model
      .aggregate([{ $match: { name: "Hulk" } }, { $count: "total_doc" }])
      .exec();

    console.log("MetodAggregation", filter);
  } catch (error) {
    console.error(error);
  }
}

module.exports = MetodAggregation;
