function borrar() {
    document.getElementById("txtnombre").value = "";
    document.getElementById("txtarticulo").value = "";
    document.getElementById("txtprecio").value = "";
    document.getElementById("txtcantidad").value = "";
}

function calcular() {
    let nombre = document.getElementById("txtnombre").value;
    let articulo = document.getElementById("txtarticulo").value;
    let precio = document.getElementById("txtprecio").value;
    let cantidad = document.getElementById("txtcantidad").value;
    let subtotal = precio * cantidad;
    let iva = subtotal * 0.13;
    let servicio = subtotal * 0.05;
    let total = subtotal + iva + servicio;




    document.getElementById("nombreout").innerHTML = nombre;
    document.getElementById("articuloout").innerHTML = articulo;
    document.getElementById("cantidadout").innerHTML = cantidad;
    document.getElementById("precioout").innerHTML = precio;
    document.getElementById("subtotalout").innerHTML = subtotal;
    document.getElementById("ivaout").innerHTML = iva;
    document.getElementById("servicioout").innerHTML = servicio;
    document.getElementById("totalout").innerHTML = total;


    

    document.getElementById("txtnombre").value = "";
    document.getElementById("txtarticulo").value = "";
    document.getElementById("txtprecio").value = "";
    document.getElementById("txtcantidad").value = "";
}