/* Esta seccion es para crear una lista de productos que puede consultar el usuario.

Creo una funcion constructora para los productos: */

const Producto = function (id, tipoProducto, marca, precio, stock) {
    this.id = id
    this.tipoProducto = tipoProducto
    this.marca = marca
    this.precio = precio
    this.stock = stock
}

/* Creo lista de productos, usando la funcion creadora. */

let producto1 = new Producto (1, "Electrocardiografo","samsung", 500000, 10)
let producto2 = new Producto (2, "Electrocardiografo","sony", 800000, 5)
let producto3 = new Producto (3, "Ecografo","Hitachi", 30000, 2)
let producto4 = new Producto (4, "Equipo de Rayos X","toshiva", 3050000, 5)
let producto5 = new Producto (5, "Equipo de CSV automatico","sony", 650000, 50)

/* Creo un array con la lista de productos */

let lista = [producto1,producto2,producto3,producto4,producto5]

/* Creo funcion que le ayuda al usuario a buscar los que quiere ingresando el producto que busca. */

function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto que deseas buscar").trim().toUpperCase() //Le pido que ingrese lo que busca y le quito los espacios y lo paso todo a mayuscula
    let resultado = lista.filter((producto)=> producto.tipoProducto.toUpperCase().includes(palabraClave))
    //le pido que recorra la lista de productos y busque coincidencias con lo que ingreso el usuario

    if (resultado.length > 0){// Si encuentra coincidencias, le pido que lo muestre en una tabla.
        console.table(resultado)
    }else{ // si no encuentra coincidencias le pido que muestre una advertencia
        alert("no hay coincidencias con: "+ palabraClave)
    }

}

filtrarProductos()