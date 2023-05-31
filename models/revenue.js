const { Schema, model } = require('mongoose')

const revenueSchema = new Schema({
    accountReceivable: { type: String, required: true },
    strain: {type: String},
    itemCategory: { type: String },
    itemDescription: { type: String }, 
    itemAmount: { type: Number },
    itemQuantity: { type: Number },
    unitMeasure: {type: String},
    barter: { type: Boolean },
    salesTax: { type: String },
}, {
    timestamps: true
})


module.exports = model('Revenue', revenueSchema)