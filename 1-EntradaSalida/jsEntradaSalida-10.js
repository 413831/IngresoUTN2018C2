/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{var precio = document.getElementById("importe").value;
var descuento;
 
precio = parseInt(precio);

descuento = precio * 0.25;
descuento = precio - descuento;
 
 document.getElementById("resultado").value = descuento;
	
}
