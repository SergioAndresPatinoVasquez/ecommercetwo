let carrito = [];
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

let lista_productos = [];

lista_productos.push(new Producto(1, "Tennis Adidas", 200, 3, 0));
lista_productos.push(new Producto(2, "Tennis Nike", 100, 4, 0));
lista_productos.push(new Producto(3, "Tennis New Balance", 150, 1, 0));
lista_productos.push(new Producto(4, "Tennis Vans", 250, 4, 0));
lista_productos.push(new Producto(5, "Tennis Reebok", 400, 2, 0));
lista_productos.push(new Producto(6, "Tennis Fila", 120, 5, 0));
lista_productos.push(new Producto(7, "Tennis Ocean Pacific", 220, 0, 0));
lista_productos.push(new Producto(8, "Tennis Under Armour", 330, 8, 0));


console.log("Lista De Productos : ");
console.log("", lista_productos);
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
    let iva = producto.precio * 0.19;

    return {
        nombre : producto.nombre,
        precio : producto.precio +iva,
        unidades : producto.unidades_vendidas
    }
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

console.log("El Carrito de Compras : ", carrito);




// Fin del carrito de compras

// Sumandole el IVA a los productos comprados por el usuario

let map_iva = carrito.map(iva);
console.log("MAP", map_iva);



/*
let total = 0;
let descuentoUno = 10;
let descuentoDos = 15;
let descuentoTres = 5;
let pagoCredito = 25;
let costoEnvio=0;
let debitoCredito = "";
let cuotas = 0;
let pagoPorCuota = 0;
let pUno = 0; //producto uno
let pDos = 0;
let pTres = 0;
let pCuatro = 0;
let pCinco = 0;
let pSeis = 0;
let pSiete = 0;
let pOcho = 0;

function calculoPagoCliente(articulo){

while(articulo != 0){

    switch (articulo) {

        case 0:
            return total;

        case 1:
            
            pUno = pUno + 1;
            total = total + 200;                   

        break;

        case 2:
            
            pDos = pDos + 1;
            total = total + 300;            

        break;

        case 3:
            
            pTres = pTres + 1;
            total = total + 250;            

        break;

        case 4:

            pCuatro = pCuatro + 1;
            total = total+ 100;            

        break;

        case 5:

            pCinco = pCinco + 1;
            total = total + 100;            

        break;

        case 6:

            pSeis = pSeis + 1;
            total = total + 60;            

        break;

        case 7:

            pSiete = pSiete + 1;
            total = total + 10;            

        break;

        case 8:

            pOcho = pOcho + 1;
            total = total + 30;            

        break;

        default:
        alert("Por favor Ingrese un valor entre 0 y 8");

    }
    
    articulo = parseFloat(prompt("0. Para finalizar la compra - 1. Tennis Adidas $200 - 2. Tennis Nike $300 - 3. Tennis NewBalance $250 - 4. Camisa $100 - 5. Jean $100 - 6. Sombrero $60 - 7. Medias $10 - 8. Bufanda $30"));
}
}

// de acuerdo al monto de la compra se le ofrece un descuento adicional al cliente
function descuentoMonto(total){

    if(total >= 600 && total<=800){
        total = total - total*(descuentoUno/100);
        descuentoDos = 0;
    } else if (total>800){
        total = total - total*(descuentoDos/100);
        descuentoUno = 0;
    } else{
        descuentoUno = 0;
        descuentoDos = 0;
    }

    return total;

}

//envio, gratis de acuerdo al monto de compra
function CostoEnvio(total){

    if(total >600){
        //alert("!Felicitaciones tu envío es gratis¡");
        descuentoTres = 0;
    }
    else {
        costoEnvio = total*(descuentoTres/100);
        total = total + costoEnvio;
    }
    return total;
}


function tipoDePago(){

    let tipoDePago = parseInt(prompt("Ingrese : 1. Pago Débito, 2. Pago Crédito a cuotas."));

    
    switch (tipoDePago){

        case 1:
            debitoCredito = "pago de contado";
        break;

        case 2:
            debitoCredito = "pago a crédito";
            
        break;

        default:
        while(tipoDePago!=1 || tipoDePago!=2){
            alert("Por favor Ingrese 1 ó 2");
            tipoDePago = parseInt(prompt("Ingrese : 1. Pago Débito, 2. Pago Crédito a cuotas"));
            if(tipoDePago==1 || tipoDePago==2){
                break;
            }
        }
        
        

        }
    
    
    return debitoCredito;
}

//si es a credito el cliente debera pagar un 25% adicional
function pagoCuotas(debitoCredito){

    if(debitoCredito == "pago a crédito"){

    cuotas = parseInt(prompt("Elija el número de cuotas en las que desea pagar sus productos : "))
    pagoPorCuota = (total/cuotas)*((100+pagoCredito)/100);

    for(i=0; i<cuotas; i++){   
        
        console.log("Usted deberá pagar en el mes " + (i+1) + " el valor de :" + pagoPorCuota.toFixed(1));

    }
    
    total=pagoPorCuota*cuotas;
    } else{
        cuotas=cuotas+1;
        pagoPorCuota = total;
    }

    
}

function resumenCompra(){


        alert("Resumen de tu compra : usted realizará el " + debitoCredito + " a " + cuotas + " Cuota/s. " + "Deberá cancelar el valor de : $" + pagoPorCuota.toFixed(1) + " por cuota, " +"para un total de : $" + total.toFixed(1) + ", el cual incluye un costo de envio de : $" + costoEnvio + ". Recibiste un descuento total del " + (descuentoUno + descuentoDos) + "%.");

}

function articulosComprados(){

    console.log("Resumen de tu compra :")
    if(pUno != 0){
        console.log("Compraste Tennis Adidas por valor $200 (" + pUno + " Unidad/es.)");
    }
    if(pDos != 0){
        console.log("Compraste Tennis Nike por valor $300 (" + pDos + " Unidad/es.)");
    }
    if(pTres != 0){
        console.log("Compraste Tennis NewBalance por valor $250 (" + pTres + " Unidad/es.)");
    }
    if(pCuatro != 0){
        console.log("Compraste Camisa por valor $100 (" + pCuatro + " Unidad/es.)");
    }
    if(pCinco != 0){
        console.log("Compraste Jean por valor $100 (" + pCinco + " Unidad/es.)");
    }
    if(pSeis != 0){
        console.log("Compraste Sombrero valor $60 (" + pSeis + " Unidad/es.)");
    }
    if(pSiete != 0){
        console.log("Compraste Medias por valor $10 " + pSiete + " Unidad/es.)");
    }
    if(pOcho != 0){
        console.log("Compraste Bufanda por valor $30 (" + pOcho + " Unidad/es.)");
    }
}


alert("Bienvenido a ComprasOnline, Ingrese el número cero '0' cuando desee finalizar la compra.")
let articulo = parseInt(prompt("0. Para finalizar la compra - 1. Tennis Adidas $200 - 2. Tennis Nike $300 - 3. Tennis NewBalance $250 - 4. Camisa $100 - 5. Jean $100 - 6. Sombrero $60 - 7. Medias $10 - 8. Bufanda $30"));

while(articulo==0){
     articulo = parseInt(prompt("0. Para finalizar la compra - 1. Tennis Adidas $200 - 2. Tennis Nike $300 - 3. Tennis NewBalance $250 - 4. Camisa $100 - 5. Jean $100 - 6. Sombrero $60 - 7. Medias $10 - 8. Bufanda $30"));

}



calculoPagoCliente(articulo);
total = descuentoMonto(total);
debitoCredito = tipoDePago();
total = CostoEnvio(total);
pagoCuotas(debitoCredito);
articulosComprados();
resumenCompra();
*/