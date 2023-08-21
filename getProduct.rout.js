const express = require('express');
const productControl = require('./getProduct.control.js')
const router = express.Router();

express.Router()
router.get('/', productControl.getAll)
router.get('/:id', productControl.getById)
router.post('/', productControl.crateProduct)
router.put('/:id', productControl.updateProduct)
router.delete('/:id', productControl.deleteProduct)
router.put('/quantityChange/:id/:type', productControl.quantityChange)
module.exports = router;