//saludo 
//const bienvenida = saludo
alert("Bienvenido al nuevo store de bebidas")

let opciones = true //aqui entra al algoritmo

//el usuario debe elegir una opcion 
while (opciones) {
    let opciones = prompt(`Por favor eliga una opcion para continuar
    1. Agregar un producto
    2. Eliminar uno o varios productos
    3. Ver el stock de bebidas
    4. Aplicar cuotas
    5. Aplicar descuento
    6. Salir`)


    //let respuesta = prompt(opciones)

    switch (opciones) {
    
        case "1":
            agregar_bebida()
            break
        case "2":
            eliminar_bebida()
            break
        case "3":
            mostrar_arreglo()
            break
        case "4":
            cantidadCuota()
            break
        case "5":
            aplicar_descuento()
        case "6":
            alert("Gracias por su tiempo")
            break
        case null:
            alert("Gracias por su tiempo")
            opciones = false
            break;
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
        let marca = prompt("Debe ingresar la marca de la bebida").trim()
        let tipo = prompt("Debe agregar el tipo de bebida").trim()
        let precio = Number(prompt("¿Cual es el precio?"))
        
        if (!marca) {

            mensaje = mensaje + "Debe ingresar la marca de la bebida"
            
        }

        if (!tipo) {
            mensaje = mensaje + "Debes agregar el tipo de bebida"
            
        }

        if (!precio) {
            mensaje = mensaje + "Debes ingresar el precio"
        }

        if (!isNaN(precio)) { 
        mensaje = mensaje + "Debes ingresar un valor numerico"
        }

        if (!"") {
            
            alert(mensaje)
            control = confirm("Desea seguir cargando nuevamente?")
            
        } else {
            return new Bebida(marca, tipo, precio)
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
//agrego metodo de array forEach que recorre el array para luego mostrarlo

function mostrar_arreglo() { 
    let msj = "Las bebidas en stock son"

    arreglo_bebida.forEach((bebida) => {
        mensaje = mensaje + "\n" + bebida.mostrar_descripcion ()

    })

    alert (mensaje)

}

//creo funcion para cuotas
 //Defino variables precio y cuotas

preciototal=0

//mensaje para el ingreso del precio 
while (true) {
    let precio = Number(prompt("ingrese el precio del producto"))
    if (!isNaN(precio) && precio != "" && precio != null) {
        alert("el precio del producto es: " + precio)
        break;

    } else {
        alert("Por favor, debes ingresar un numero")
    }
    continue

}    

//Creo funcion cantidad de cuotas a elegir

function cantidadCuota() {
    let numero = Number(
        prompt(`Elija la cantidad de cuotas 
    1. una cuota
    2. tres cuotas
    3. seis cuotas
    4. doce cuotas`)
    );
    return numero
}
let cuota = cantidadCuota();
calculo(cuota);

//Defino funcion de precios y cuotas con if para calculo del precio total


function calculo(numero) {
    
        if (numero == 1) {
            preciototal = precio * (1 + 0.05)
        }
        else if (numero == 2) {
            preciototal = precio * (1 + 0.15)
        }
        else if (numero == 3) {
            preciototal = precio * (1 + 0.3)
        }
        else if (numero == 4) {
            preciototal = precio * (1 + 0.6)
        }
            
        else {
            alert("Opcion no valida, vuelve a empezar")
        }


        alert("el precio total a pagar en cuotas es de : " + preciototal);

        return preciototal
    
}
    

//creo funcion para  saber si hay o no bebidas

function hay_bebidas() {
    if (arreglo_bebida.lenght == 0) {
        alert("No hay bebidas disponibles en este momento")
        
        return false
    }


}


//creo funcion para aplicar descuento
function aplicar_descuento() {
    
    if (hay_bebidas()) {
        let descuento = Number(prompt("Ingrese un descuento"))

        if (!isNaN(descuento)) {
            let desc = descuento / 100 

            let arreglo_bebida_descuento = arreglo_bebida.map((bebida) => {
                return {
                    marca: bebida.nombre,
                    tipo: bebida.tipo,
                    precio: bebida.prec * (1 - desc)
                }
        })

        alert(" a las bebidas se le aplicó un descuento de "+ descuento + "%")
            
            let mensaje = "Las bebidas con descuento aplicado son: \n"
            arreglo_bebida_descuento.forEach((bebida) => {
                
                mensaje = mensaje + "marca" + bebida.marca + " - " + "tipo" + bebida.tipo + " - " + bebida.precio + "\n"

            } )
            alert(mensaje)
            return

        }
}

}
