const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

    //Requerir productos inicio
router.get('/productsPhones', productController.getPhones);            //@GET /products/productsPhones                
router.get('/productsPrinters', productController.getPrinters);        //@GET /products/productsPrinters    
router.get('/productsInformatica', productController.getInformatica);  //@GET /products/productsInformatica    
router.get('/productsAccesorios', productController.getAccesorios);    //@GET /products/productsAccesorios
    //Requerir productos fin

router.get('/createProduct', productController.createProduct); //@GET /products/createProduct

router.post('/createProduct', productController.addProduct); //@POST /products/createProduct

router.get('/productCart', productController.getCart); //@GET /products/productCart

router.get('/:id/productDetail', productController.getDetail); //@GET /products/:id/productDetail

router.get('/:id/delete', productController.deleteProduct); //@DELETE /products/:id/delete

router.get('/:id/update', productController.getUpdate); //@GET /products/:id/update

router.put('/:id/put',  ); //@put /products/:id/put

module.exports = router;