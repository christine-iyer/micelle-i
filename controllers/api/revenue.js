require('dotenv').config()
const Revenue = require('../../models/revenue')




const destroyRevenue = async (req, res, next) => {
    try {
        const deletedRevenue = await Revenue.findByIdAndDelete(req.params.id)
        res.locals.data.revenue = deletedRevenue
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateRevenue = async (req, res, next) => {
    try {
        const updatedRevenue = await Revenue.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.revenue = updatedRevenue
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const createRevenue = async (req, res, next) => {
    try {
        const createdRevenue = await Revenue.create(req.body)
        // const user = await User.findOne({ email: res.locals.data.email })
        // user.revenues.addToSet(createdRevenue)
        // await user.save()
       
        res.locals.data.revenue = createdRevenue
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const getRevenues= async (req, res, next) => {
    try {
        
        const revenues = await Revenue.find(req.body)
        res.locals.data.revenues = revenues
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const respondWithRevenues = (req, res) => {
    res.json(res.locals.data.revenues)
}
const respondWithRevenue = (req, res) => {
    res.json(res.locals.data.revenue)
}



module.exports = {
    destroyRevenue,
    updateRevenue,
    createRevenue,
    getRevenues,
    respondWithRevenues,
    respondWithRevenue
}