function mostrar()
{var acumulador = 0;
var contador = 0;
var respuesta;	
 
do
{
	acumulador = acumulador + (parseInt(prompt("Ingrese un número")));
	
	while(isNaN(acumulador))
	{
	alert("Error. Ingrese un número válido");
	acumulador = parseInt(prompt("Ingrese un número"));
	}
	
	contador = contador + 1;
	
	respuesta = prompt("¿Continuar?");
	respuesta.toLowerCase;
	
	/*if(respuesta == "si" || respuesta == "no")
	{
		alert("Dato inválido");
		mostrar();
	}*/
	

}while(respuesta == "si");
	
document.getElementById("suma").value = acumulador;
document.getElementById("promedio").value = acumulador/contador;


}//FIN DE LA FUNCIÓN