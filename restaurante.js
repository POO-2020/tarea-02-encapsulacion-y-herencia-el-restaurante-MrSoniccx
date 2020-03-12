export default class Restaurante{

    constructor(nombre, telefono, direccion)
    {
        this._nombre = nombre
        this._telefono = telefono
        this._direccion = direccion
        this._productos = []
        this._pedidos = []
    }

    registrarProducto(producto){
        this._productos.push(producto)
    }
    registrarPedido(pedido){
        this._pedidos.push(pedido)
    }

    listarProductos(){
        console.log("~ P R O D U C T O S ~")
        this._productos.forEach( (pro) => {
            console.log(pro.getDescripcion())
        })
    }
    listarPedidos(){
        console.log("~ P E D I D O S ~")
        this._pedidos.forEach( (ped, i) => {
            console.log(`(${i+1}) ~ ${ped.getResumen()}`)
        })
    }
}