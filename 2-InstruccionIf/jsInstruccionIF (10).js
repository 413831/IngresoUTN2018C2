function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var aleatorio = Math.floor(Math.random()*(11 - 1)  + 1);

if (aleatorio >= 9)
{
	
	alert ("Su nota es: "+aleatorio+" EXCELENTE");
}
else if (aleatorio > 4)
{
	alert ("Su nota es: "+aleatorio+" APROBÓ");
}
else
{
	alert("Su nota es: "+aleatorio+" CORRA A CASA A ESTUDIAR YA");
}

}//FIN DE LA FUNCIÓN