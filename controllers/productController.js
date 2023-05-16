const express = require('express');
const path = require('path');

const productController = {
    getCart: (req,res)=>{
        res.sendFile(path.join(__dirname, '../views/products/productcart.html'));
    },

    getDetail:(req,res)=>{
        res.sendFile(path.join(__dirname, '../views/products/productDetail.html'));
    }

}

module.exports = productController;