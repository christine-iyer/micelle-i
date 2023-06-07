const router = require('express').Router()
const itemCtrl = require('../../controllers/api/inventory')

router.delete('/:id', itemCtrl.destroyItem, itemCtrl.respondWithItem)
router.put('/:id', itemCtrl.updateItem, itemCtrl.respondWithItem)
router.post('/', itemCtrl.createItem, itemCtrl.respondWithItem)
router.get('/:id', itemCtrl.getItems, itemCtrl.respondWithItem)
router.get('/', itemCtrl.getItems, itemCtrl.respondWithItems)

module.exports = router