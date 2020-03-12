import Precio from "./precio.js";
import Producto from "./producto.js";
import ElementoPedido from "./elementoPedido.js";
import Direcion from "./direccion.js";
import Cliente from "./cliente.js";
import Pedido from "./pedido.js";
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Restaurante from "./restaurante.js";
import ClienteFrecuente from "./clienteFrecuente.js";

class Main{
    constructor(){
        this.precio = new Precio(75.20)
        this.producto = new Producto("Pizza grande", this.precio)
        this.producto2 = new Producto("Salchipapas", new Precio(20.50))
        this.elementoPedido = new ElementoPedido(this.producto, 2)
        this.elementoPedido2 = new ElementoPedido(this.producto2, 1)
        this.direccion = new Direcion("Manzanas", 524, 12, "Garbantez", 255781, "Colima", "Colima")
        this.cliente = new Cliente("Pepe Pepa Peparin", this.direccion, 3125486691)
        this.pedido = new Pedido(new Fecha(new Date(2018,5,25)), new Tiempo(11,23,"am"), this.cliente)
        this.pedido.agregarElemento(this.elementoPedido)
        this.pedido.agregarElemento(this.elementoPedido2)
        this.pedido.agregarElemento(this.elementoPedido2)

        this.restaurante = new Restaurante("Spag Heddy", 3126758175, this.direccion)


        let datosCliente = {
            nombre: "Juanito Alcachofaz fafafa",
            direccion: new Direcion("Peras", 220, 7, "VillaSenior", 244876, "Colima", "Colima"),
            telefono: 3125847294,
            numeroCliente: 12587,
            fecha: new Fecha(new Date(2017,8,24))
        }

        this.clienteFrecuente = new ClienteFrecuente(datosCliente)
        
    }
    
    testPrecio()
    { console.log(this.precio.getPrecio())}

    testElementoProducto()
    { console.log(this.elementoPedido.getDescripcion())}

    testDireccion()
    { console.log(this.direccion.getFormatoExtendido())
      console.log(this.direccion.getFormatoCorto())}

    testCliente()
    { console.log(this.cliente.getPerfil())}

    testPedido()
    {
        
        console.log(this.pedido.getResumen())
        console.log(this.pedido.getNumeroElementos())
        console.log(this.pedido.getProductos())
        console.log(this.pedido.getCostoTotal())
        this.pedido.listarElementos()
        
        
    }

    testRestaurante()
    {
        this.restaurante.registrarProducto(this.producto)
        this.restaurante.registrarProducto(this.producto2)
        this.restaurante.registrarPedido(this.pedido)

        this.restaurante.listarProductos()
        this.restaurante.listarPedidos()
    }
}

let tester = new Main()
tester.testPrecio();
tester.testElementoProducto();
tester.testDireccion();
tester.testCliente();
tester.testPedido();
tester.testRestaurante();