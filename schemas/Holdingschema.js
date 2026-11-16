const {Schema } = require('mongoose');

const HoldingSchema = new Schema({
    name:String,
    price:Number,
    qty:Number,
    avg:Number,
    net:String,
    day:String,
});

module.exports = { HoldingSchema };