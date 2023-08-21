const express = require('express');
const userControl = require('./getUsers.control')
const router = express.Router();

express.Router()
router.get('/:idAdmin',userControl.permissionsManagement, userControl.getAll)
router.get('/:idAdmin/:id',userControl.permissionsManagement, userControl.getById)
router.get('/:id', userControl.getById)
router.post('/', userControl.crateUser)
router.put('/:id', userControl.updateUser)
router.delete('/:id', userControl.deleteUser)
module.exports = router;