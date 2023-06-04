const { Schema, model } = require('mongoose')

const itemSchema = new Schema({
    name: { type: String, required: true },
    strain: {type: String},
    productCategory: { type: String },
    inventoryName: { type: String },
    itemDetail: { type: String },
    unitMeasure: { type: String, required: true },
    unitOnHand: { type: Number, required: true },
    unitCost: {type: Number},
    targetQuantity: { type: Number }, 
    newPlant: { type: Boolean }, 
    plantOrigin: { type: String, required: true },
    plantOriginDate: {type: Date},
    plantStage: { type: String }, 
    imageURL: {type: String }
}, {
    timestamps: true
})


module.exports = model('Item', itemSchema)