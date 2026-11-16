const {model} = require("mongoose");
const { HoldingSchema } = require("../schemas/Holdingschema");

const HoldingModel = new model("Holding", HoldingSchema);

module.exports = { HoldingModel };