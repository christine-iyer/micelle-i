const { Schema, model } = require('mongoose')

const inventorySchema = new Schema({
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
    plantOrigin: { type: String },
    plantOriginDate: {type: Date},
    plantStage: { type: String }, 
    image: { type: String }
}, {
    timestamps: true
})


module.exports = model('Inventory', inventorySchema)