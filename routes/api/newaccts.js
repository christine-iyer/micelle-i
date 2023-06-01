const router = require('express').Router()
const newacctCtrl = require('../../controllers/api/newaccts')


/* /api/Newaccts/:id
DELETE
destroy newacct
*/
router.delete('/:id', newacctCtrl.destroyNewacct, newacctCtrl.respondWithNewacct)
/*
/api/Newaccts/:id
PUT
update newacct
*/
router.put('/:id', newacctCtrl.updateNewacct, newacctCtrl.respondWithNewacct)
/*
/api/Newaccts
POST
create newacct
*/
router.post('/', newacctCtrl.createNewacct, newacctCtrl.respondWithNewacct)
router.get('/newaccts', newacctCtrl.respondWithNewaccts, newacctCtrl.respondWithNewaccts)
module.exports = router