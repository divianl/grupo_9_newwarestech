const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/productCart', productController.getCart);

router.get('/productDetail', productController.getDetail);

router.get('/productsPhones', productController.getPhones);

router.get('/productsPrinters', productController.getPrinters);

module.exports = router;