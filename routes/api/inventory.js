const router = require('express').Router()
const itemCtrl = require('../../controllers/api/inventory')


/* /api/Items/:id
DELETE
destroy expense
*/
router.delete('/:id', itemCtrl.destroyItem, itemCtrl.respondWithItem)
/*
/api/Items/:id
PUT
update expense
*/
router.put('/:id', itemCtrl.updateItem, itemCtrl.respondWithItem)
/*
/api/Items
POST
create expense
*/
router.post('/', itemCtrl.createItem, itemCtrl.respondWithItem)
router.get('/inventorys', itemCtrl.respondWithItems, itemCtrl, itemCtrl.respondWithItems)

module.exports = router