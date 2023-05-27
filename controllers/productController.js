const express = require('express');
const path = require('path');

let listado = [
    {
        id: 1,
        name: 'xiaomi',
        image:'/images/celulares/xiaomi1.png',
        price: '$70.000'
    },
    {
        id: 2,
        name: 'xiaomi',
        image:'/images/celulares/xiaomi2.png',
        price: '$92.000'
    },
    {
        id: 3,
        name: 'iphone',
        image:'/images/celulares/iphone1.png',
        price: '$350.000'
    },
    {
        id: 4,
        name: 'iphone',
        image:'/images/celulares/iphone2.png',
        price: '$280.000'
    },
    {
        id: 5,
        name: 'huawei',
        image:'/images/celulares/huawei1.png',
        price: '$62.000'
    },
    {
        id: 6,
        name: 'huawei',
        image:'/images/celulares/huawei2.png',
        price: '$75.000'
    },

]

const productController = {
    getCart: (req,res)=>{
        /*res.sendFile(path.join(__dirname, '../views/products/productcart.html'));*/
        res.render('productcart')  
    },

    getDetail:(req,res)=>{
        /* res.sendFile(path.join(__dirname, '../views/products/productDetail.html'));*/
        const id = Number(req.params.id);
        const productoAMostrar = listado.find(productoActual => productoActual.id === id);
        
        if(!productoAMostrar){
           return res.send('El id del producto no es valido')
        }

        res.render('productDetail', {listado: productoAMostrar})
    }, 
    
    postDetail: (req,res)=>{
        let detalleProducto = [];

        const datos = req.body;
                
        detalleProducto.push(datos);
        
        res.json(detalleProducto);
       // res.render('productDetail')
    },

    getPhones:(req,res)=>{

     /*   const listado = [
                {
                    id: 1,
                    name: 'xiaomi',
                    image:'/images/celulares/xiaomi1.png',
                    price: '$70.000'
                },
                {
                    id: 2,
                    name: 'xiaomi',
                    image:'/images/celulares/xiaomi2.png',
                    price: '$92.000'
                },
                {
                    id: 3,
                    name: 'iphone',
                    image:'/images/celulares/iphone1.png',
                    price: '$350.000'
                },
                {
                    id: 4,
                    name: 'iphone',
                    image:'/images/celulares/iphone2.png',
                    price: '$280.000'
                },
                {
                    id: 5,
                    name: 'huawei',
                    image:'/images/celulares/huawei1.png',
                    price: '$62.000'
                },
                {
                    id: 6,
                    name: 'huawei',
                    image:'/images/celulares/huawei2.png',
                    price: '$75.000'
                },

            ] */
        res.render('productsPhones', {listado}); 
    },  

    createProduct: (req,res)=>{
        res.render('createProduct');
    },

    addProduct: (req,res)=>{ 
        const datos = req.body;
        datos.id = listado.length + 1; 
        listado.push(datos);
        res.redirect('/products/productsPhones');
    },

    getUpdate: (req,res)=>{
        const id = Number(req.params.id);
        const productoAModificar = listado.find(productoActual => productoActual.id === id);
        if(!productoAModificar){
            return res.send('El id del producto no es valido')
        }

        res.render('updateProduct', {listado: productoAModificar});
    },

    updateProduct: (req,res)=>{
        res.redirect('/products/productsPhones');
    }, 

    deleteProduct: (req,res)=>{
        const id = Number(req.params.id);
        const nuevosProductos = listado.filter(productoActual => productoActual.id !== id);
        listado = nuevosProductos;
        res.redirect('/products/productsPhones');
    },

    getPrinters:(req,res)=>{

        const listadoImpresoras = [
                {
                    name: 'impresora epton',
                    image:'/images/impresoras/impresora_1.png',
                    price: '$80.000'
                },
                {
                    name: 'impresora hp',
                    image:'/images/impresoras/images.png',
                    price: '$99.999'
                },
                {
                    name: 'impresora hp',
                    image:'/images/impresoras/impresora_2.png',
                    price: '$110.000'
                },
                {
                    name: 'impresora epson',
                    image:'/images/impresoras/impresora_3.png',
                    price: '$130.000'
                },
                {
                    name: 'impresora epson',
                    image:'/images/impresoras/impresora_4.png',
                    price: '$152.000'
                },
                {
                    name: 'impresora hp',
                    image:'/images/impresoras/images (4).png',
                    price: '$230.000'

                },
            ]
        res.render('productsPrinters', {listadoImpresoras}); 
    },

    getAccesorios:(req,res)=>{

        const listadoAccesorios = [
                {
                    name: 'auriculares',
                    image:'/images/accesorios/auriculares/auricular1.png',
                    price: '$14.999'
                },
                {
                    name: 'computadora',
                    image:'/images/accesorios/computadoras/computadora1.png',
                    price: '$240.000'
                },
                {
                    name: 'mouse',
                    image:'/images/accesorios/mouse/mouse1.png',
                    price: '$4.800'
                },
                {
                    name: 'parlantes',
                    image:'/images/accesorios/parlantes/parlante1.png',
                    price: '$3.500'
                },
                {
                    name: 'sillas',
                    image:'/images/accesorios/sillas/silla1.png',
                    price: '$38.000'
                },
                {
                    name: 'teclados',
                    image:'/images/accesorios/teclados/teclado1.png',
                    price: '$22.000'
                },
            ]
        res.render('productsAccesorios', {listadoAccesorios}); 
    },

    getInformatica:(req,res)=>{

        const listadoInformatica = [
                {
                    name: 'excel',
                    image:'/images/informatica/excel.png',
                    price: '$280'
                },
                {
                    name: 'word',
                    image:'/images/informatica/word.png',
                    price: '$280'
                },
                {
                    name: 'powerpoint',
                    image:'/images/informatica/powerpoint.png',
                    price: '$280'
                },
                {
                    name: 'outlook',
                    image:'/images/informatica/outlook.png',
                    price: '$280'
                },
                {
                    name: 'one note',
                    image:'/images/informatica/one.png',
                    price: '$280'
                },
                {
                    name: 'seguridad de windows',
                    image:'/images/informatica/seguridad.png',
                    price: '$280'
                },
            ]
        res.render('productsInformatica', {listadoInformatica}); 
    }
}





module.exports = productController;