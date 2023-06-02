const router = require('express').Router()
const newptCtrl = require('../../controllers/api/newpts')


/* /api/Newpts/:id
DELETE
destroy newpt
*/
router.delete('/:id', newptCtrl.destroyNewPt, newptCtrl.respondWithNewPt)
/*
/api/Newpts/:id
PUT
update newpt
*/
router.put('/:id', newptCtrl.updateNewPt, newptCtrl.respondWithNewPt)
/*
/api/Newpts
POST
create newpt
*/
router.post('/', newptCtrl.createNewPt, newptCtrl.respondWithNewPt)
router.get('/newpts', newptCtrl.respondWithNewPt, newptCtrl.respondWithNewPt)
module.exports = router