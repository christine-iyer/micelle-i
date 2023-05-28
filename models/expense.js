const { Schema, model } = require('mongoose')

const expenseSchema = new Schema({
    accountPayable: { type: String, required: true },
    itemDescription: {type: String},
    itemAmount: { type: Number },
    itemQuantity: { type: String },
    unitMeasure: {type: String},
    barter: { type: Boolean },
    salesTax: { type: String },
}, {
    timestamps: true
})


module.exports = model('Expense', expenseSchema)