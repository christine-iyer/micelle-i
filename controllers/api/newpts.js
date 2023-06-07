require('dotenv').config()
const NewPt = require('../../models/newpts')



// delete newpt
// create newpt
// update newpt

const destroyNewPt = async (req, res, next) => {
    try {
        const deletedNewPt = await NewPt.findByIdAndDelete(req.params.id)
        res.locals.data.newpt = deletedNewPt
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateNewPt = async (req, res, next) => {
    try {
        const updatedNewPt = await NewPt.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.newpt = updatedNewPt
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const createNewPt = async (req, res, next) => {
    try {
        const createdNewPt = await NewPt.create(req.body)
        res.locals.data.newpt = createdNewPt
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const getNewPts= async (req, res, next) => {
    try {
        
        const newpts = await NewPt.find(req.body)
        res.locals.data.newpts = newpts 
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
const respondWithNewPts = (req, res) => {
    res.json(res.locals.data.newpts)
}

const respondWithNewPt = (req, res) => {
    res.json(res.locals.data.newpt)
}



module.exports = {
    destroyNewPt,
    updateNewPt,
    getNewPts,
    createNewPt,
    respondWithNewPt, 
    respondWithNewPts
}