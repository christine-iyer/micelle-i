const router = require('express').Router()
const newacctCtrl = require('../../controllers/api/newaccts')

router.delete('/:id', newacctCtrl.destroyNewacct, newacctCtrl.respondWithNewacct)
router.put('/:id', newacctCtrl.updateNewacct, newacctCtrl.respondWithNewacct)
router.post('/', newacctCtrl.createNewacct, newacctCtrl.respondWithNewacct)
router.get('/:id', newacctCtrl.getNewaccts, newacctCtrl.respondWithNewaccts)
router.get('/', newacctCtrl.getNewaccts, newacctCtrl.respondWithNewaccts)


module.exports = router