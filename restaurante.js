

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
       
       let found = this._pedidos.find(ped => ped._esIgualA(pedido))
      
       console.log(found)
        if(found != undefined){return false}
        else
        {this._pedidos.push(pedido)
        return true}

        
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
    
    buscarPedido(pedido){

    }
    eliminarPedido(pedido){

    }
    modificarPedido(pedido){

    }
}