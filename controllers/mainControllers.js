const express = require('express');
const path = require('path');

const controllers = {
    getIndex: (req,res)=>{
       res.render('index');
    },
    getAdmin: (req,res)=>{
        res.render('admin');
     }
}

module.exports = controllers;