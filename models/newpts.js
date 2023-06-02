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
    licenseNum: { type: String, required: true },
    licenseSt: {type: String},
    medCardSt: { type: String },
    dlLiscUrl: { type: String } ,
    medCardUrl: { type: String } 

}, {
    timestamps: true
})


module.exports = model('Newpt', newptSchema)