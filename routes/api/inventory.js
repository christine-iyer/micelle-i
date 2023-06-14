const router = require('express').Router()
const inventoryCtrl = require('../../controllers/api/inventory')

router.delete('/:id', inventoryCtrl.destroyInventory, inventoryCtrl.respondWithInventory)
router.put('/:id', inventoryCtrl.updateInventory, inventoryCtrl.respondWithInventory)
router.post('/', inventoryCtrl.createInventory, inventoryCtrl.respondWithInventory)
router.get('/:id', inventoryCtrl.getInventorys, inventoryCtrl.respondWithInventory)
router.get('/', inventoryCtrl.getInventorys, inventoryCtrl.respondWithInventorys)

module.exports = router