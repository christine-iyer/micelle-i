const router = require('express').Router()
const revenueCtrl = require('../../controllers/api/revenue')

router.delete('/:id', revenueCtrl.destroyRevenue, revenueCtrl.respondWithRevenue)
router.put('/:id', revenueCtrl.updateRevenue, revenueCtrl.respondWithRevenue)
router.post('/', revenueCtrl.createRevenue, revenueCtrl.respondWithRevenue)
router.get('/:id', revenueCtrl.getRevenues, revenueCtrl.respondWithRevenues)
router.get('/', revenueCtrl.getRevenues, revenueCtrl.respondWithRevenues)
module.exports = router