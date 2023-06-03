const { Schema, model } = require('mongoose')

const itemSchema = new Schema({
    name: { type: String, required: true },
    strain: {type: String},
    productCategory: { type: String },
    inventoryName: { type: String },
    unitMeasure: { type: String, required: true },
    unitCost: {type: String},
    description: { type: String },
    itemQuantity: { type: Number }, 
    targetQuantity: { type: Number }, 
    newPlant: { type: Boolean }, 
    plantOrigin: { type: String, required: true },
    plantOriginDate: {type: Date},
    plantStage: { type: String },
    itemId: { type: String }, 
    image: {type: String }
}, {
    timestamps: true
})


module.exports = model('Item', itemSchema)