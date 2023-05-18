const express = require('express');
const path = require('path');

const userController = {
    getLogin: (req,res)=>{
        /*res.sendFile(path.join(__dirname, '../views/users/login.html'));*/
        res.render('login');
    },

    getRegister:(req,res)=>{
        /*res.sendFile(path.join(__dirname, '../views/users/register.html'));*/
        res.render('register');
    }

}

module.exports = userController;