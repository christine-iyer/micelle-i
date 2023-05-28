require('dotenv').config()
const Expense = require('../../models/expense')




const destroyExpense = async (req, res, next) => {
    try {
        const deletedExpense = await Expense.findByIdAndDelete(req.params.id)
        res.locals.data.expense = deletedExpense
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateExpense = async (req, res, next) => {
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.expense = updatedExpense
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const createExpense = async (req, res, next) => {
    try {
        const createdExpense = await Expense.create(req.body)
        // const user = await User.findOne({ email: res.locals.data.email })
        // user.expenses.addToSet(createdExpense)
        // await user.save()
        console.log(createExpense)
        res.locals.data.expense = createdExpense
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const respondWithExpenses = (req, res) => {
    res.json(res.locals.data.expenses)
}
const respondWithExpense = (req, res) => {
    res.json(res.locals.data.expense)
}



module.exports = {
    destroyExpense,
    updateExpense,
    createExpense,
    respondWithExpenses,
    respondWithExpense
}