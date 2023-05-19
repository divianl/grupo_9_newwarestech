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
    }
}

module.exports = productController;