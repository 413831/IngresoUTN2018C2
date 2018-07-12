function mostrar()
{var precio = prompt("Introduzca el precio");
var descuento = prompt("Introduzca el descuento");
var preciofinal;

precio = parseInt(precio);
descuento = parseInt(descuento);

descuento = (descuento*precio)/100;
preciofinal = precio - descuento;

document.getElementById("elPrecioFinal").value = preciofinal;


}
