const { Schema, model } = require('mongoose')

const newptSchema = new Schema({
    name: { type: String, required: true },
    email: {type: String},
    phone: { type: String },
    address: { type: String },
    city: {type: String},
    state: { type: String },
    zip: { type: String },
    description: { type: String }, 
    idType: { type: String, required: true },
    idState: {type: String},
    medCardState: { type: String },
    images: [{ type: String }] 

}, {
    timestamps: true
})


module.exports = model('Newpt', newptSchema)