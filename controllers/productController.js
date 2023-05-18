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
    }

}

module.exports = productController;