function mostrar()
{var i = 1;
var acumulador = 0;
var numero;
var promedio;

while(i <= 5)
{
	numero = parseInt(prompt("Ingrese un número"));
	acumulador = acumulador + numero;
	i = i + 1;	
}

promedio = acumulador / 5;

document.getElementById("suma").value = acumulador;
document.getElementById("promedio").value = promedio;



}//FIN DE LA FUNCIÓN