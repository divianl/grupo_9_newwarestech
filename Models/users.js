const fs = require('fs') 
const path = require('path');

const userModel = {
    //Ruta del archivo JSON
    route: '../data/users.json',

    //Ver base completa, activos e inactivos
    findComplete: function(deleted){
        const allUsersJSON = fs.readFileSync(path.join(__dirname, this.route), 'utf-8'); //Leer archivo JSON y tipo de caracteres que se usan 
        let users = JSON.parse(allUsersJSON) //Traducir de JSON a JS
        users = users.filter(users => (users.deleted === deleted));
        const userJSON = JSON.stringify(users); // Convertir de JS a JSON 
        return users;
    },

    //Traer un user según su ID
    findByid: function(id){
        let users = this.findComplete(false);
        users = users.find(users => users.id === id);            
        if(!users){ //en caso que no se encuentre el id a buscar
            users = null;
        }
        return users;
    },

    //Editar un user
    updateByid: function(id, newData){
        let users = this.findComplete(false);
        const indice = users.findIndex(userActual => userActual.id === id); //Buscar indice del user
        users[indice].firstName = newData.firstName;
        users[indice].lastName = newData.lastName;
        users[indice].email = newData.email;
        users[indice].category = newData.category;
        users[indice].password = newData.password;
        users[indice].image = newData.image;
        const usersJSON = JSON.stringify(users); // Convertir de JS a JSON
        fs.writeFileSync(path.join(__dirname, this.route), usersJSON);
        return users;
    },
    
    //Crear un cliente
    createOne: function(newUser){
        let user = this.findComplete(false);
        newUser.id = users[users.length - 1].id + 1;//creo el nuevo id
        newUser.deleted = false;
        users.push(newUser);
        const usersJSON = JSON.stringify(users); 
        fs.writeFileSync(path.join(__dirname, this.route), usersJSON);   
        return users; 
    },

    deleteByid: function(id){
        let users = this.findComplete(false);
        const indice = users.findIndex(userActual => userActual.id === id); //Buscar indice del producto
        users[indice].deleted = true;
        const usersJSON = JSON.stringify(users); // Convertir de JS a JSON
        fs.writeFileSync(path.join(__dirname, this.route), usersJSON);
        return users;
    } 
}

module.exports = userModel;