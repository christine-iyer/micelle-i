const mongoose = require('mongoose')
require('./category')
const itemSchema = require('./inventorySchema')
module.exports = mongoose.model('Item', itemSchema)