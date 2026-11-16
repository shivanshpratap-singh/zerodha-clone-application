const{model} = require("mongoose");
const { PositionSchema } = require("../schemas/Positionschema");

const PositionModel = new model("Position", PositionSchema);
module.exports = { PositionModel };