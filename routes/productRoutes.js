const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/productCart', productController.getCart);

router.get('/productDetail', productController.getDetail);

module.exports = router;