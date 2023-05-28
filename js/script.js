let carrito = [];
let carritoUsuario=[];
let compra_articulo;

class Producto {

    constructor(id, nombre, precio, stock, unidades_vendidas){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.unidades_vendidas = unidades_vendidas;
    }

    obtener_datos(){
        console.log("Id: ", this.id);
        console.log("Nombre: ", this.nombre);
        console.log("Precio: $", this.precio);
        console.log("Stock: ", this.stock);
        console.log("Unidades Vendidas: ", this.unidades_vendidas);
        console.log("------------------------");
    }

    obtener_stock(){

        if(this.stock<=0){

            return false;
        }else {
            return true;
        }

    }

    venta_stock(cantidad){
        if(this.stock >= cantidad){
            this.stock = this.stock - cantidad;
            this.unidades_vendidas = this.unidades_vendidas + cantidad;
            return true;
        }else {

            return false;
        }

    }
}
//Creando lista de productos
let lista_productos = [];

lista_productos.push(new Producto(1, "Tennis Adidas", 200, 3, 0));
lista_productos.push(new Producto(2, "Tennis Nike", 100, 4, 0));
lista_productos.push(new Producto(3, "Tennis New Balance", 150, 1, 0));
lista_productos.push(new Producto(4, "Tennis Vans", 250, 4, 0));
lista_productos.push(new Producto(5, "Tennis Reebok", 400, 2, 0));
lista_productos.push(new Producto(6, "Tennis Fila", 120, 5, 0));
lista_productos.push(new Producto(7, "Tennis Ocean Pacific", 220, 0, 0));
lista_productos.push(new Producto(8, "Tennis Under Armour", 330, 8, 0));

//Mostrando los datos iniciales antes de la compra
console.log("************* Lista De Productos Iniciales : ******************");
console.log(" ");

for(let producto of lista_productos){
    producto.obtener_datos();
}

//¿existe el artículo que digitó el cliente?
function buscar_articulo(articulo){

    return articulo.id == compra_articulo;
}

//Agregar IVA
 function iva(producto){
    let iva = (producto.precio * producto.unidades_vendidas) * 0.19 ;

    return {
        nombre : producto.nombre,
        precio : (producto.precio * producto.unidades_vendidas) +iva,
        unidades : producto.unidades_vendidas
        
    }
 }

 //Resumen a cancelar por el usuario con su compra
 function resumenCompra(array){

    if(array.unidades_vendidas !=0){
        carritoUsuario.push(array);
    }
 }

 function totalApagar(acu, arr){
    acu = acu + arr.precio;
    return acu;

 }

 function datosCompra(arr){
    
    console.log(" ");
    console.log("Producto : ", arr.nombre);
    console.log("Precio con IVA : ", arr.precio);
    console.log("unidades compradas : ", arr.unidades);
    console.log("-------------------------------");
 }



// Capturando las compras del usuario

compra_articulo = parseFloat(prompt("Para comprar, ingrese el número que identifica al artículo : - 0. Para finalizar la compra - 1. Tennis Adidas $200 - 2. Tennis Nike $100 - 3. Tennis NewBalance $150 - 4. Tennis Vans $250 - 5. Tennis Reebok $400 - 6. Tennis Fila $120 - 7. Tennis Ocean Pacific $220 - 8. Tennis Under Armour $330"));


while (compra_articulo != 0){


    resultado_busqueda = lista_productos.find(buscar_articulo);

    if(resultado_busqueda == undefined){
        alert("Producto no encontrado");
        compra_articulo = parseFloat(prompt("Para comprar, ingrese el número que identifica al artículo : - 0. Para finalizar la compra - 1. Tennis Adidas $200 - 2. Tennis Nike $100 - 3. Tennis NewBalance $150 - 4. Tennis Vans $250 - 5. Tennis Reebok $400 - 6. Tennis Fila $120 - 7. Tennis Ocean Pacific $220 - 8. Tennis Under Armour $330"));

    } else if(resultado_busqueda.obtener_stock()){   
        
        let unidades = parseInt(prompt (" Ingrese el número de unidades que requiere de este producto"));
        if(resultado_busqueda.venta_stock(unidades)){
            carrito.push(resultado_busqueda); 
        } else{
            alert("Lo sentimos, no tenemos stock disponible, unidades : " + resultado_busqueda.stock);
        }
            

        compra_articulo = parseFloat(prompt("Para comprar, ingrese el número que identifica al artículo : - 0. Para finalizar la compra - 1. Tennis Adidas $200 - 2. Tennis Nike $100 - 3. Tennis NewBalance $150 - 4. Tennis Vans $250 - 5. Tennis Reebok $400 - 6. Tennis Fila $120 - 7. Tennis Ocean Pacific $220 - 8. Tennis Under Armour $330"));
    } else{
        alert("¡ Lo sentimos, no tenemos stock del producto !, unidades :" + resultado_busqueda.stock);
        compra_articulo = parseFloat(prompt("Para comprar, ingrese el número que identifica al artículo : - 0. Para finalizar la compra - 1. Tennis Adidas $200 - 2. Tennis Nike $100 - 3. Tennis NewBalance $150 - 4. Tennis Vans $250 - 5. Tennis Reebok $400 - 6. Tennis Fila $120 - 7. Tennis Ocean Pacific $220 - 8. Tennis Under Armour $330"));
    }

    
}



lista_productos.forEach(resumenCompra);
let Carrito_iva = carritoUsuario.map(iva);
let venta_total = Carrito_iva.reduce(totalApagar,0);

console.log(" ");
console.log("***********  Lista De Productos déspues de la compra : *****************");
console.log(" ");
for(let producto of lista_productos){
    producto.obtener_datos();
}

console.log(" ");
console.log("********   RESUMEN DE TU COMPRA : **********");
for(let producto of Carrito_iva){
    datosCompra(producto);
}
console.log(" ");
console.log("Muchas gracias por tu compra ");
console.log("El total a pagar incluyendo IVA es : $", Math.round(venta_total));
alert("El total a pagar incluyendo IVA es : $" + Math.round(venta_total));
