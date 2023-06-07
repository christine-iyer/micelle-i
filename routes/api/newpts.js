const router = require('express').Router()
const newptCtrl = require('../../controllers/api/newpts')


router.delete('/:id', newptCtrl.destroyNewPt, newptCtrl.respondWithNewPt)
router.put('/:id', newptCtrl.updateNewPt, newptCtrl.respondWithNewPt)
router.post('/', newptCtrl.createNewPt, newptCtrl.respondWithNewPt)
router.get('/:id', newptCtrl.getNewPts, newptCtrl.respondWithNewPt)
router.get('/', newptCtrl.getNewPts, newptCtrl.respondWithNewPts)
module.exports = router
