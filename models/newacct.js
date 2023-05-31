const { Schema, model } = require('mongoose')

const newacctSchema = new Schema({
    name: { type: String, required: true },
    email: {type: String},
    phone: { type: String },
    address: { type: String },
    city: {type: String},
    state: { type: String },
    zip: { type: String },
    description: { type: String }
}, {
    timestamps: true
})


module.exports = model('Newacct', newacctSchema)