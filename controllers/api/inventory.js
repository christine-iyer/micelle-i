require('dotenv').config()
const Item = require('../../models/itemSchema')

const destroyItem = async (req, res, next) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id)
        res.locals.data.item = deletedItem
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateItem = async (req, res, next) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.item = updatedItem
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const createItem = async (req, res, next) => {
    try {
        const createdItem = await Item.create(req.body)

        res.locals.data.item = createdItem
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const getItems= async (req, res, next) => {
    try {
        
        const items = await Item.find(req.body)
        res.locals.data.items = items 
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const respondWithItems = (req, res) => {
    res.json(res.locals.data.items)
}
const respondWithItem = (req, res) => {
    res.json(res.locals.data.item)
}



module.exports = {
    destroyItem,
    updateItem,
    createItem,
    getItems,
    respondWithItem, 
    respondWithItems
}