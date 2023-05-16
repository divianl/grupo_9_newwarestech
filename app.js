const express = require ('express');
const app = express();

const path = require('path');

const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const publicPath = path.join(__dirname, './public');

app.use(mainRoutes);
app.use(userRoutes);
app.use(productRoutes);


app.use(express.static(publicPath));

app.listen(3005, ()=>{
    console.log("Servidor corriendo en el puerto 3005");
});