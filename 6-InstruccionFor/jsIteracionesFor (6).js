function mostrar()
{
var numero = parseInt(prompt("Ingrese un numero"));
var contadorPares = 0;
var i;


for(i = 1;i < numero;i++)
{
    if(i % 2 == 0)
    {
        document.write(i + "<br>");
        contadorPares++;
    }
}
document.write(contadorPares);





}//FIN DE LA FUNCIÓN