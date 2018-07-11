function mostrar()
{
//tomo la edad  

var edad = document.getElementById("edad").value;
var estadocivil = document.getElementById("estadoCivil").value;


edad = parseInt(edad);

if(edad >= 18 && estadocivil == "Soltero")
{
alert("Es mayor y no es soltero.")
}


}//FIN DE LA FUNCIÓN