const router = require('express').Router()
const revenueCtrl = require('../../controllers/api/revenue')


/* /api/Revenues/:id
DELETE
destroy revenue
*/
router.delete('/:id', revenueCtrl.destroyRevenue, revenueCtrl.respondWithRevenue)
/*
/api/Revenues/:id
PUT
update revenue
*/
router.put('/:id', revenueCtrl.updateRevenue, revenueCtrl.respondWithRevenue)
/*
/api/Revenues
POST
create revenue
*/
router.post('/', revenueCtrl.createRevenue, revenueCtrl.respondWithRevenue)
router.get('/revenues', revenueCtrl.respondWithRevenues, revenueCtrl.respondWithRevenues)
module.exports = router