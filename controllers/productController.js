const { log } = require('console');
const { name } = require('ejs');
const express = require('express');
const path = require('path');

const productModel = require('../Models/product');

const productController = {

    //Renderizar productos en la vista 'productList' inicio
    getPhones:(req,res)=>{ 
        const products = productModel.findByProduct_type('phones', false)
        res.render('productList', {products});
    },  

    getPrinters:(req,res)=>{
        const products = productModel.findByProduct_type('printer', false)
        res.render('productList', {products});
    },

    getAccesorios:(req,res)=>{
        const products = productModel.findByProduct_type('accesories', false)
        res.render('productList', {products});
    },

    getInformatica:(req,res)=>{
        const products = productModel.findByProduct_type('software', false)
        res.render('productList', {products});
    },
    //Renderizar productos en la vista 'productList' fin

    getCart: (req,res)=>{
        res.render('productcart')  
    },

    addCart: (req,res)=>{
        res.send(console.log('hola id: ' + products.id));
    },
    
    getDetail:(req,res)=>{
        const id = Number(req.params.id);
        const products = productModel.findByid(id)
        res.render('productDetail', {products});
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
        newProduct = req.body;
        newProduct.image = '/images/' + req.file.filename;
        let products = productModel.createOne(newProduct)
        res.render('productList', {products})
    },

    getUpdate: (req,res)=>{
        const id = Number(req.params.id);
        const products = productModel.findByid(id)
        res.render('updateProduct', {products})
    },

    updateProduct: (req,res)=>{
        const id = Number(req.params.id);
        let newData = req.body;
        console.log(newData);
        let products = productModel.updateByid(id, newData);
        res.render('productList', {products})
        /*
        const id = Number(req.params.id);
        let newData = req.params.body;
        console.log(newData);
        let products = productModel.updateByid(id, newData);
        
        const id = Number(req.params.id); 
        const nuevosDatos = req.body;
        const productoAActualizar = products.find(productoActual => productoActual.id === id);
        const indice = listado.indexOf(productoAActualizar);
        listado[indice].name = nuevosDatos.name;
        listado[indice].image = nuevosDatos.image;
        listado[indice].price = nuevosDatos.price;
        listado[indice].descripcion = nuevosDatos.descripcion;
        res.redirect('/products/productsPhones');*/
    }, 

    deleteProduct: (req,res)=>{
        const id = Number(req.params.id);
        let products = productModel.deleteByid(id)
        products = productModel.findAll(false)
        res.render('productList', {products})
    },
}

module.exports = productController;