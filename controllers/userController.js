const express = require('express');

const userModel = require('../models/users');

const userController = {
    getLogin: (req,res)=>{
        res.render('login');
    },

    getRegister:(req,res)=>{
        res.render('register');
    },

    getuserList:(req,res)=>{
        const users = userModel.findComplete(false)
        res.render('userList', {users});
    },

    getuserToUpdate:(req,res)=>{
        const id = Number(req.params.id);
        const users = userModel.findByid(id)
        res.render('updateUser', {users})
    },

    userUpdate: (req,res)=>{
            const id = Number(req.params.id);
            newData = req.body;
            newData.image = '/images/users/' + req.file.filename;
            let users = userModel.updateByid(id, newData)
            res.render('userList', {users})
    },

    userDelete:(req,res)=>{
        const id = Number(req.params.id);
        let users = userModel.deleteByid(id);
        users = userModel.findComplete(false)
        res.render('userList', {users});
    }    
}

module.exports = userController;