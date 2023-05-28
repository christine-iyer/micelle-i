const router = require('express').Router()
const expenseCtrl = require('../../controllers/api/expenses')


/* /api/Expenses/:id
DELETE
destroy expense
*/
router.delete('/:id', expenseCtrl.destroyExpense, expenseCtrl.respondWithExpense)
/*
/api/Expenses/:id
PUT
update expense
*/
router.put('/:id', expenseCtrl.updateExpense, expenseCtrl.respondWithExpense)
/*
/api/Expenses
POST
create expense
*/
router.post('/', expenseCtrl.createExpense, expenseCtrl.respondWithExpense)
router.get('/expenses', expenseCtrl.respondWithExpenses, expenseCtrl.respondWithExpenses)
module.exports = router