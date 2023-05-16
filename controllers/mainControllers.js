const express = require('express');
const path = require('path');

const controllers = {
    getIndex: (req,res)=>{
        res.sendFile(path.join(__dirname, '../views/main/index.html'));
    }
}

module.exports = controllers;