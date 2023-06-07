const express = require('express');
const multer = require('multer');
const userController = require('../controllers/userController');
const router = express.Router();

//Configuración multer inicio
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, './public/images/users')
    },
    filename: (req,file, cb)=>{
        cb(null, 'user-' + Date.now() + '-' + file.originalname);
    } 
});

const upload = multer({storage}); 
//Configuración multer final

router.get('/login', userController.getLogin);//@GET /users/login
router.get('/register', userController.getRegister);//@GET /users/register

//Rutas de user
router.get('/userList', userController.getuserList);//@GET /users/userList
router.get('/:id/updateUser', userController.getuserToUpdate); //@GET /users/:id/update
router.put('/:id/put', upload.single('image'), userController.userUpdate); //@put /users/:id/put  formulario para update
router.get('/:id/deleteUser', userController.userDelete); //@post /users/:id/deleteUser  funcion de  update

module.exports = router;