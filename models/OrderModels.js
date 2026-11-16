const { model } = require("mongoose");
const { OrderSchema } = require("../schemas/Orderschema");

const OrderModel = model("Order", OrderSchema);

module.exports = { OrderModel };