function mostrar()
{
var numero = parseInt(prompt("Ingrese un numero"));
var contadorDivisores = 0;
var i;


for(i = 1;i < numero;i++)
{
    if(numero % i == 0)
    {
        document.write(i + "<br>");
        contadorDivisores++;
    }
}
document.write(contadorDivisores);



}//FIN DE LA FUNCIÓN