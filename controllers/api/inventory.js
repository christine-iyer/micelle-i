require('dotenv').config()
const Inventory = require('../../models/inventorySchema')

const destroyInventory = async (req, res, next) => {
    try {
        const deletedInventory = await Inventory.findByIdAndDelete(req.params.id)
        res.locals.data.inventory = deletedInventory
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateInventory = async (req, res, next) => {
    try {
        const updatedInventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.inventory = updatedInventory
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const createInventory = async (req, res, next) => {
    try {
        const createdInventory = await Inventory.create(req.body)

        res.locals.data.inventory = createdInventory
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const getInventorys= async (req, res, next) => {
    try {
        
        const inventorys = await Inventory.find(req.body)
        res.locals.data.inventorys = inventorys 
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const respondWithInventorys = (req, res) => {
    res.json(res.locals.data.inventorys)
}
const respondWithInventory = (req, res) => {
    res.json(res.locals.data.inventory)
}



module.exports = {
    destroyInventory,
    updateInventory,
    createInventory,
    getInventorys,
    respondWithInventory, 
    respondWithInventorys
}