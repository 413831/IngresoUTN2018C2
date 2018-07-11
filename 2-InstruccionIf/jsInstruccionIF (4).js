function mostrar()
{
//tomo la edad  
var edad = document.getElementById("edad").value;

edad = parseInt(edad);

if(edad >=13 && edad <= 17) // alternativa indirecta negando las condiciones invertidas(!(edad <13 || edad >17))
{
    alert("La persona es adolescente");
}


}//FIN DE LA FUNCIÓN