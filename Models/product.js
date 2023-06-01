//voy por 1h:18sg

const fs = require('fs') 
const path = require('path');

const productModel = {
    //Ruta del archivo JSON
    route: '../data/products.json',

    //***Para poder utilizar el this, las funciones no pueden sen arrow function =>()***    
    //Traer todos los productos

    findAll: function(){
        const allProductsJSON = fs.readFileSync(path.join(__dirname, this.route), 'utf-8'); //Leer archivo JSON y tipo de caracteres que se usan 
        const products = JSON.parse(allProductsJSON) //Traducir de JSON a JS
        return (products);
    },

    //Traer un prodcuto según su ID
    findByid: function(id){
        const products = this.findAll();
        let searched = products.find(product => product.id === id);      
        if(!searched){ //en caso que no se encuentre el id a buscar
            searched = null;
        }
        return searched;
    },
    
    //Eliminar un producto
    deleteByid: function(id){
        let products = this.findAll();
        products = products.filter(product => product.id !== id);
        const productsJSON = JSON.stringify(products); // Convertir de JS a JSON
        fs.writeFileSync(path.join(__dirname, this.route), productsJSON);
        return products;
    } ,  
    
    //Editar un producto
    updateByid: function(id, newData){
        let products = this.findAll();
        const indice = products.findIndex(productoActual => productoActual.id === id); //Buscar indice del producto
        products[indice].name = newData.name;
        products[indice].image = newData.image;
        products[indice].price = newData.price;
        const productsJSON = JSON.stringify(products); // Convertir de JS a JSON
        fs.writeFileSync(path.join(__dirname, this.route), productsJSON);
        return products;
    },
    
    createOne: function(newProduct){
        let products = this.findAll();
        newProduct.id = products[products.length - 1].id + 1;//creo el nuevo id
        products.push(newProduct);
        const productsJSON = JSON.stringify(products); 
        fs.writeFileSync(path.join(__dirname, this.route), productsJSON);    
    }
}

module.exports = productModel;