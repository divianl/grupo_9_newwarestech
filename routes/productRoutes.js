const express = require('express');
const multer = require('multer');
const productController = require('../controllers/productController');
const router = express.Router();


//Configuración multer inicio
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, './public/images')
    },
    filename: (req,file, cb)=>{
        cb(null, Date.now() + '-' + file.originalname);
    } 
});

const upload = multer({storage}); 
//Configuración multer final

//Requerir productos inicio
router.get('/productsPhones', productController.getPhones);            //@GET /products/productsPhones                
router.get('/productsPrinters', productController.getPrinters);        //@GET /products/productsPrinters    
router.get('/productsInformatica', productController.getInformatica);  //@GET /products/productsInformatica    
router.get('/productsAccesorios', productController.getAccesorios);    //@GET /products/productsAccesorios
//Requerir productos fin

//Carrito de compras
router.get('/productCart', productController.getCart); //@GET /products/productCart
router.post('/:id/productCart', productController.addCart); //@POST /products/productCart

//CRUD inicio
router.get('/createProduct', productController.createProduct); //@GET /products/createProduct
router.post('/createProduct', upload.single('img'), productController.addProduct); //@POST /products/createProduct
router.get('/:id/productDetail', productController.getDetail); //@GET /products/:id/productDetail
router.get('/:id/delete', productController.deleteProduct); //@DELETE /products/:id/delete
router.get('/:id/update', productController.getUpdate); //@GET /products/:id/update
router.put('/:id/put', productController.updateProduct ); //@put /products/:id/put  este deberia ser el update
//CRUD final

//Rutas carrito de compra inicio
router.get('/:id/addToCart', productController.getaddToCart);//@GET /products/:id/addToCart
router.get('/cleanCart', productController.getcleanCart);//@GET /products/cleanCart
//Rutas carrito de compra final

module.exports = router;