const btn = document.getElementById('btn');

function addList(){
    listadoNuevo.push(listado.name, listado.image, listado.price)
    console.log(listadoNuevo);
}

btn.addEventListener('click',addList , true)
