const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

//@GET /products/createProduct
router.get('/createProduct', productController.createProduct);

//@POST /products/createProduct
router.post('/createProduct', productController.addProduct);

//@GET /products/productCart
router.get('/productCart', productController.getCart);

//@GET /products/:id/productDetail
router.get('/:id/productDetail', productController.getDetail);

//@DELETE /products/:id/delete
router.get('/:id/delete', productController.deleteProduct);

//@GET /products/:id/update
router.get('/:id/update', productController.getUpdate);

//@put /products/:id/update
router.put('/:id/update', productController.updateProduct);

//Vistas con listado de productos
//@GET /products/productsPhones
router.get('/productsPhones', productController.getPhones);
//@GET /products/productsPrinters
router.get('/productsPrinters', productController.getPrinters);
//@GET /products/productsInformatica
router.get('/productsInformatica', productController.getInformatica);
//@GET /products/productsAccesorios
router.get('/productsAccesorios', productController.getAccesorios);


module.exports = router;