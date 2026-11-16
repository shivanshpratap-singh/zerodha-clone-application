const {Schema} = require("mongoose");

const PositionSchema = new Schema({
    product: String,
    name: String,
    price: Number,
    qty: Number,
    avg: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

module.exports = { PositionSchema };