function mostrar()
{var contador = 1;
var acumulador = 0;
var promedio;
//var numero;

//Se establece una variable para sumar valores ingresados por el usuario 
//Se establece otra variable para contabilizar la cantidad de iteraciones

while(contador <= 5)
{
	//numero = parseInt(prompt("Ingrese un número"));
	acumulador = acumulador + (parseInt(prompt("Ingrese un número")));
	contador = contador + 1;	
}

promedio = acumulador / 5;

document.getElementById("suma").value = acumulador;
document.getElementById("promedio").value = promedio;



}//FIN DE LA FUNCIÓN