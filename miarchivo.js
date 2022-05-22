//saludo 
const bienvenida = saludo
alert("Bienvenido al nuevo store de bebidas")

let opciones = true //aqui entra al algoritmo

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

//declaro array para su almacenamiento cuando el usuario agregue bebidas
let arreglo_bebida = new Array ()

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

    let beb = pedir_datos()    
    if (beb) { 
    
    beb.set_id(nuev_id)
    nuev_id++
    arreglo_bebida.push(beb)
    alert("sumaste una nueva bebida! sigue así")
}

}

//Defino una funcion para solicitar datos de bebida que el usuario deba ingresar (funcion de otra funcion)

function pedir_datos() {
    let control = true 
    while (control) {
        let mensaje = ""
        let marca = prompt("Debe ingresar la marca de la bebida")
        let tipo = prompt("Debe agregar el tipo de bebida")
        let contenido = prompt("¿Que cantidad desea ingresar?")
        
        if (!marca) {

            mensaje = mensaje + "Debe ingresar la marca de la bebida"
            
        }

        if (!tipo) {
            mensaje = mensaje + "Debes agregar el tipo de bebida"
            
        }

        if (!contenido) {
            mensaje = mensaje + "Debes ingresar la cantidad"
        }

        if (!isNaN(cantidad)) { 
        mensaje = mensaje + "Debes ingresar un valor numerico"
        }

        if (!"") {
            
            alert(mensaje)
            control = confirm("Desea seguir cargando nuevamente?")
            
        } else {
            return new Bebida(marca, tipo, contenido)
    }
    }

    return false
}

//eliminacion del producto de bebida mediante la lista de arrays
function eliminar_bebida() {
    
    console.log(bebida)
    let indice = prompt("Ingrese la posicion de las bebidas a eliminar: ")
    let cantidad = prompt("Ingrese la cantidad de bebidas a eliminar")
    productos.splice(indice, cantidad)
    console.log(bebidas)

}

//creo una funcion para mostrar arreglo con metodos

function mostrar_arreglo() { 
    let msj = "Las bebidas en stock son"
    arreglo_bebida.forEach((bebida) => {
        mensaje = mensaje "\n" + 

    }


}
