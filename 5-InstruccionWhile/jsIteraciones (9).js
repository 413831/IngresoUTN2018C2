function mostrar()
{var contador=0;
var numero;	
var maximo;
var minimo;
var respuesta="si";

do
{
numero = parseInt(prompt("Ingrese un numero"));
contador++;
	//Se establecen los limites con el primer numero ingresado
	if(contador == 1)
	{
		maximo = numero;
		minimo = numero;
	}
	//Se verifica el nuevo numero con los limites
	if(numero > maximo)
	{
		maximo = numero;
	}
	if(numero < minimo)
	{
		minimo = numero;
	}

respuesta = prompt("¿Desea continuar?");
respuesta.toLowerCase;

}while(respuesta == "si");

/*
//Se establece variable bandera para desbloquear y bloquear código
var flag = 0;

do
{
numero = parseInt(prompt("Ingrese un numero"));
	
	//Se verifica el numero con los limites O la variable bandera 
	if(numero > maximo || flag == 0)
	{
		maximo = numero;
	}
	if(numero < minimo || flag == 0)
	{
		minimo = numero;
	}
	//Se cambia el valor de la variable bandera para limitar la condición del IF a la comparación del numero
	//En cada iteracion
	flag = 1;

respuesta = prompt("¿Desea continuar?");
respuesta.toLowerCase;

}while(respuesta == "si");*/


document.getElementById("maximo").value = maximo; 
document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN