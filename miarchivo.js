//saludo 
const bienvenida = saludo
alert("Bienvenido al nuevo store de bebidas")

let opciones = true 

//el usuario debe elegir una opcion 
while (opciones) {
    let opciones = Number(`por favor eliga una opcion para continuar
    1. Ver el stock de bebidas
    2. Agregar un producto
    3. Eliminar uno o varios productos
    4. Aplicar descuento o ver cuotas
    5. Salir`)


    let respuesta = prompt(opciones)

    switch (respuesta) {
    
        case "1":
            ver_stock()
            break
        case "2":
            agregar_producto()
            break
        case "3":
            Eliminar_producto()
            break
        case "4":
            aplicar_promo()
            break
        case "5":
            alert("Gracias por su tiempo")
            break
        case null:
            alert("Gracias por su tiempo")
            opciones = false 
            break
        default:
            alert ("La opción ingresada es inválida")
            
}
}

//defino array de bebidas

const bebida = ["Cocacola", "Fernet", "Licores", "Vinos", "Cervezas", "Soda"]

//defino funcion flecha para saber cuales son las bebidas disponibles
bebidasDisponibles => console.log("Las bebidas disponibles son: " + bebida)

//agrego bebida para abastecimiento del producto 

bebida.push("sidra")
alert("la nueva lista de bebidas disponible es " + bebida)
console.log(bebida.lenght)

 //creo una funcion para que el usuario ingrese una nueva bebida manualmente

function agregar_bebida (){

    if (beb) { 
    let beb = pedir_datos()
    beb.set_id(nuev_id)
    nuev_id++
    agrego_bebida.push(beb)
    alert("sumaste una nueva bebida! sigue así")
}

}


//eliminacion del producto de bebida mediante la lista de arrays
function eliminar_bebida() {
    
    console.log(bebida)
    let indice = prompt("Ingrese la posicion de las bebidas a eliminar: ")
    let cantidad = prompt("Ingrese la cantidad de bebidas a eliminar")
    productos.splice(indice, cantidad)
    console.log(bebidas)

}
