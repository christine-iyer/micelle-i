require('dotenv').config()
const Newacct = require('../../models/newaccts')




const destroyNewacct = async (req, res, next) => {
    try {
        const deletedNewacct = await Newacct.findByIdAndDelete(req.params.id)
        res.locals.data.newacct = deletedNewacct
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateNewacct = async (req, res, next) => {
    try {
        const updatedNewacct = await Newacct.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.newacct = updatedNewacct
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const createNewacct = async (req, res, next) => {
    try {
        const createdNewacct = await Newacct.create(req.body)
        // const user = await User.findOne({ email: res.locals.data.email })
        // user.newaccts.addToSet(createdNewacct)
        // await user.save()
       
        res.locals.data.newacct = createdNewacct
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const getNewaccts= async (req, res, next) => {
    try {
        
        const newaccts = await Newacct.find(req.body)
        res.locals.data.newaccts = newaccts 
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const respondWithNewaccts = (req, res) => {
    res.json(res.locals.data.newaccts)
}
const respondWithNewacct = (req, res) => {
    res.json(res.locals.data.newacct)
}



module.exports = {
    destroyNewacct,
    updateNewacct,
    createNewacct,
    getNewaccts,
    respondWithNewaccts,
    respondWithNewacct
}