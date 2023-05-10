const express = require ('express');
const app = express();

const path = require('path');

const publicPath = path.join(__dirname, './public');

app.use(express.static(publicPath));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'))
})
app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
app.get('/productcart', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/productcart.html'))
})
app.get('/productdetail', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
})

app.listen(3005, ()=>{
    console.log("Servidor corriendo en el puerto 3005");
})
