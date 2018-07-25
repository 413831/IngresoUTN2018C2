function mostrar()
{var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

//while (numero < 0 || numero < 10 || isNan(numero))
while (numero > 10 || numero < 0 || isNaN(numero))
{
	numero = prompt("Error. ingrese un número entre 0 y 10.");
}
document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN