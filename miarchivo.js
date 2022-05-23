//preentrega del proyecto final parte 1

//STORE DE BEBIDAS

//declaro array para su almacenamiento cuando el usuario agregue bebidas
let arreglo_bebida = new Array();

let gen_id = 1
//saludo
alert("Bienvenido al nuevo store de bebidas");

let flag = true //aqui entra al algoritmo

//el usuario debe elegir una opcion
while (flag) {
  let opciones = prompt(`Por favor, elija una opcion para continuar
    1. Agregar un producto
    2. Eliminar uno o varios productos
    3. Ver el stock de bebidas
    4. Aplicar descuento
    5. Salir`);

    switch (opciones) {
    case "1":
      agregar_bebida();
      break;
    case "2":
      eliminar_bebida();
      break;
    case "3":
      muestro_bebidas();
      break;
    case "4":
      aplicar_descuento();
    case "5":
        alert("Gracias por su tiempo")
        flag = false
      break
    case null:
      alert("Gracias por su tiempo");
      flag = false;
      break;
    default:
      alert("La opción ingresada es inválida");
  }
}


//Defino una funcion para solicitar datos de bebida que el usuario deba ingresar (funcion de otra funcion)

function pedir_datos() {
  let control = true;

  while (control) {
    let mensaje = ""
    let marca = prompt("Debe ingresar la marca de la bebida").trim();
    let tipo = prompt("Debe agregar el tipo de bebida").trim();
    let precio = Number(prompt("¿Cual es el precio?"));

    if (!marca) {
      mensaje = mensaje + "Debe ingresar la marca de la bebida";
    }

    if (!tipo) {
      mensaje = mensaje + "Debes agregar el tipo de bebida";
    }

    if (isNaN(precio)) {
      mensaje = mensaje + "Debes ingresar un valor numerico";
    }

    if (mensaje != "") {
        
      alert(mensaje);
          control = confirm ("¿Desea seguir cargando nuevamente?")
          
      } else {
          
        return new Bebida(marca, tipo, precio)
    }
  }

  return false
}

//creo una funcion para que el usuario ingrese una nueva bebida manualmente

function agregar_bebida() {
  let bebida = pedir_datos()
  if (bebida) {
    bebida.set_id(gen_id)
    gen_id++
    arreglo_bebida.push(bebida)
    alert("Sumaste una nueva bebida! sigue así")
  }
}

//creo una funcion para eliminar bebidas
function eliminar_bebida() {
  if (existen_bebidas()) {
    muestro_arreglo();

    let id_ingresado = prompt(" Ingrese el codigo id de bebida a eliminar  ").trim();

    if (id_ingresado) {
      let bebida_encontrada = arreglo_bebida.find(
        (bebida) => bebida.id == id_ingresado
      );

      if (bebida_encontrada) {
        let resp = confirm(
          "Esta seguro que desea eliminarla " +
            bebida_encontrada.mostrar_descripcion() +
            "?"
        );
        if (resp) {
          arreglo_bebida = arreglo_bebida.filter(
            (bebida) => bebida.id != id_ingresado
          );
          alert("La Bebida ha sido eliminada");
        }
      }
    }
  }
}

function muestro_bebidas() {

//defino orden de precios de las bebidas para mostrar el stock de bebidas se aplica metodo sort
  if (existen_bebidas()) {
    let resp = prompt("Las bebidas se mostraran ordenada de acuerdo al precio \n Ingrese A (ascendente) o (D) descendente").toUpperCase()
    if (resp == "A") {
      arreglo_bebida.sort((a, b) => {
      
        if (a.precio > b.precio) {

          return 1
        }
      
        if (a.precio < b.precio) {
          return -1
        }
        return 0 
      })
    } 

    if (resp == "D") {
      
      arreglo_bebida.sort((a, b) => {
        if (a.precio > b.precio) {
          return -1

        }
        if (a.precio < b.precio) {
        return 1
        }
        return 0
      })
    }
        muestro_arreglo()
  }

}


//creo una funcion para mostrar arreglo con metodos
//agrego metodo de array forEach que recorre el array para luego mostrarlo

function muestro_arreglo() {
  let mensaje = "Las bebidas en stock son";

  arreglo_bebida.forEach((bebida) => {
    mensaje = mensaje + "\n" + bebida.mostrar_descripcion();
  });

  alert(mensaje);
}


//creo funcion para saber si hay o no bebidas

function existen_bebidas() {
  
  if (arreglo_bebida.length == 0) {
    alert("No hay bebidas disponibles en stock")
    return false
  }
  return true

}

//creo funcion para aplicar descuento
function aplicar_descuento() {

  if (existen_bebidas()) {
    let descuento = Number(prompt("Ingrese un descuento"));

    if (!isNaN(descuento)) {
      let desc = descuento / 100;

      let arreglo_bebida_descuento = arreglo_bebida.map((bebida) => {
        return {
          marca: bebida.marca,
          tipo: bebida.tipo,
          precio: bebida.precio * (1 - desc)
        }
      })

      alert("Felicidades! se aplicó un descuento de " + descuento + "%");

      let mensaje = "Las bebidas con el descuento aplicado son: \n";
      arreglo_bebida_descuento.forEach((bebida) => {
        mensaje =
          mensaje +
          "marca " +
          bebida.marca +
          " - " +
          "tipo " +
          bebida.tipo +
          " - " +
          bebida.precio +
          "\n";
      });
      alert(mensaje);
      return;
    }
  }
}
