const router = require('express').Router()
const expenseCtrl = require('../../controllers/api/expenses')


router.delete('/:id', expenseCtrl.destroyExpense, expenseCtrl.respondWithExpense)
router.put('/:id', expenseCtrl.updateExpense, expenseCtrl.respondWithExpense)
router.post('/', expenseCtrl.createExpense, expenseCtrl.respondWithExpense)
router.get('/:id', expenseCtrl.getExpenses, expenseCtrl.respondWithExpense)
router.get('/', expenseCtrl.getExpenses, expenseCtrl.respondWithExpenses)
module.exports = router