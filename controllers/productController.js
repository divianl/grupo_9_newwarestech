const { log } = require('console');
const { name } = require('ejs');
const express = require('express');
const path = require('path');

const productModel = require('../Models/product')

//Pseudo base de datos
let listadoAMostrar = []; // BD vacia para copiar la BD del listado de productos requeridos
let listadophones = [
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

];

let listadoImpresoras = [
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
];

let listadoInformatica = [
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

let listadoAccesorios = [
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

const productController = {

    //Renderizar productos en la vista 'productList' inicio
    getPhones:(req,res)=>{ 
        listadoAMostrar = listadophones;
        res.render('productList', {listadoAMostrar}); //res.render('productsPhones', {listado});
    },  

    getPrinters:(req,res)=>{
        listadoAMostrar = listadoImpresoras;
        res.render('productList', {listadoAMostrar}) //res.render('productsPrinters', {listadoImpresoras}); 
    },

    getAccesorios:(req,res)=>{
        listadoAMostrar = listadoAccesorios;
        res.render('productList', {listadoAMostrar})//res.render('productsAccesorios', {listadoAccesorios}); 
    },

    getInformatica:(req,res)=>{
        listadoAMostrar = listadoInformatica;
        res.render('productList', {listadoAMostrar})//res.render('productsInformatica', {listadoInformatica}); 
    },
    //Renderizar productos en la vista 'productList' fin

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

    createProduct: (req,res)=>{
        res.render('createProduct');
    },

    addProduct: (req,res)=>{ 
        const datos = req.body;
        console.log(datos);
        datos.id = listado.length + 1; 

        //
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
        const id = Number(req.params.id); 
        const nuevosDatos = req.body;
        const productoAActualizar = listado.find(productoActual => productoActual.id === id);
        const indice = listado.indexOf(productoAActualizar);
        listado[indice].name = nuevosDatos.name;
        listado[indice].image = nuevosDatos.image;
        listado[indice].price = nuevosDatos.price;
        listado[indice].descripcion = nuevosDatos.descripcion;
        res.redirect('/products/productsPhones');
    }, 

    deleteProduct: (req,res)=>{
        const id = Number(req.params.id);
        const nuevosProductos = listado.filter(productoActual => productoActual.id !== id);
        listado = nuevosProductos;
        res.redirect('/products/productsPhones');
    },

}

module.exports = productController;