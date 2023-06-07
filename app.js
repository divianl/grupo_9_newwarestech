//Requiriendo modulos y asignandolos a constantes
const express = require ('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

// Requiriendo rutas
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); 

// Especificando rutas de vistas
app.set('view engine', 'ejs');
app.set('views',[
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/partials'),
    path.join(__dirname, './views/products'),
    path.join(__dirname, './views/users'),
])

// Middlewares
const publicPath = path.join(__dirname,'./public'); //Ruta carpeta publica
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));  

//Enturadotes (routers)
app.use(mainRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes); ///products es un prefijo que se usa en el @get

//Levantando el servidor 
app.listen(3005, ()=>{
    console.log("Servidor corriendo http://localhost:3005");
});