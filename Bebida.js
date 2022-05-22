//defino clase Bebida y su constructor

class Bebida {


        constructor(marca,tipo,precio){
        this.marca = marca
        this.tipo = tipo
        this.precio = precio
        this.id = -1
    }
    

    // con este metodo de array se pretende mostrar la descripcion de las bebidas
    mostrar_descripcion() {
    
        return (this.id + " - " + this.marca + " - " + this.tipo + " - "+ this.precio)
}

    
    //obtencion de un nuevo id

    set_id(nuevo_id) {
        
        this.id = nuevo_id
    }
}
