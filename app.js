const express = require ('express');
const app = express();

const path = require('path');

const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.set('view engine', 'ejs');
app.set('views',[
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/partials'),
    path.join(__dirname, './views/products'),
    path.join(__dirname, './views/users'),
])

const publicPath = path.join(__dirname,'./public');

app.use(mainRoutes);
app.use(userRoutes);
app.use(productRoutes);

app.use(express.static(publicPath));

app.listen(3005, ()=>{
    console.log("Servidor corriendo http://localhost:3005");
});