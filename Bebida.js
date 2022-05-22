class Bebida {

    constructor(marca, tipo, contenido) {
        this.marca = (marca)
        this.tipo = (tipo)
        this.precio =(precio)
    }
    

    // con este metodo de array se pretende mostrar la descripcion de las bebidas
    mostrar_descripcion() {
    
        return (this.id + " - " + this.marca + " - " + this.tipo + " - "+ this.precio)
}

}
