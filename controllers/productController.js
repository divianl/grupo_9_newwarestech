const express = require('express');
const path = require('path');

const productController = {
    getCart: (req,res)=>{
        /*res.sendFile(path.join(__dirname, '../views/products/productcart.html'));*/
       res.render('productcart')
    },

    getDetail:(req,res)=>{
        /* res.sendFile(path.join(__dirname, '../views/products/productDetail.html'));*/
        res.render('productDetail')
    },

    getPhones:(req,res)=>{

        const listado = [
                {
                    id: 1,
                    name: 'name1',
                    image:'/images/A03.png',
                    price: '$450'
                },
                {
                    id: 2,
                    name: 'name2',
                    image:'/images/A12.png',
                    price: '$450'
                },
                {
                    id: 3,
                    name: 'name3',
                    image:'/images/A32.png',
                    price: '$450'
                },
                {
                    id: 4,
                    name: 'name4',
                    image:'/images/A50.png',
                    price: '$450'
                },
                {
                    id: 5,
                    name: 'name5',
                    image:'/images/A03.png',
                    price: '$450'
                },
                {
                    id: 6,
                    name: 'name6',
                    image:'/images/A12.png',
                    price: '$450'
                },
                {
                    id: 7,
                    name: 'name7',
                    image:'/images/A32.png',
                    price: '$450'
                },
                {
                    id: 8,
                    name: 'name8',
                    image:'/images/A50.png',
                    price: '$450'
                },
                {
                    id: 9,
                    name: 'name9',
                    image:'/images/A03.png',
                    price: '$450'
                },
                {
                    id: 10,
                    name: 'name10',
                    image:'/images/A50.png',
                    price: '$450'
                },
            ]
        res.render('productsPhones', {listado}); 
    },  

    getPrinters:(req,res)=>{

        const listadoImpresoras = [
                {
                    name: 'printer1',
                    image:'/images/accesorios/impresora_1.png',
                    price: '$280'
                },
                {
                    name: 'printer2',
                    image:'/images/accesorios/impresora_2.png',
                    price: '$280'
                },
                {
                    name: 'printer3',
                    image:'/images/accesorios/impresora_3.png',
                    price: '$280'
                },
                {
                    name: 'printer4',
                    image:'/images/accesorios/impresora_4.png',
                    price: '$280'
                },
                {
                    name: 'printer5',
                    image:'/images/accesorios/impresora_5.png',
                    price: '$280'
                },
                {
                    name: 'printer6',
                    image:'/images/accesorios/impresora_1.png',
                    price: '$280'
                },
                {
                    name: 'printer7',
                    image:'/images/accesorios/impresora_2.png',
                    price: '$280'
                },
                {
                    name: 'printer8',
                    image:'/images/accesorios/impresora_3.png',
                    price: '$280'
                },
                {
                    name: 'printer9',
                    image:'/images/accesorios/impresora_4.png',
                    price: '$280'
                },
                {
                    name: 'printer10',
                    image:'/images/accesorios/impresora_5.png',
                    price: '$280'
                },
            ]
        res.render('productsPrinters', {listadoImpresoras}); 
    },

    getAccesorios:(req,res)=>{

        const listadoAccesorios = [
                {
                    name: 'auriculares',
                    image:'/images/accesorios/auriculares/auricular1.png',
                    price: '$280'
                },
                {
                    name: 'computadora',
                    image:'/images/accesorios/computadoras/computadora1.png',
                    price: '$280'
                },
                {
                    name: 'mouse',
                    image:'/images/accesorios/mouse/mouse1.png',
                    price: '$280'
                },
                {
                    name: 'parlantes',
                    image:'/images/accesorios/parlantes/parlante1.png',
                    price: '$280'
                },
                {
                    name: 'sillas',
                    image:'/images/accesorios/sillas/silla1.png',
                    price: '$280'
                },
                {
                    name: 'teclados',
                    image:'/images/accesorios/teclados/teclado1.png',
                    price: '$280'
                },
            ]
        res.render('productsAccesorios', {listadoAccesorios}); 
    }
}





module.exports = productController;