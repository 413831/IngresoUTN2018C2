function mostrar()
{var nota;
var sexo;
var contadorNota = 0;
var contadorMmayor6 = 0;
var acumulador = 0;
var notaMasBaja = 0;
var sexoNotaBaja;
var flag = 0;
var promedio;
var i;

for(i = 0;i < 5;i++)
{
    nota = parseInt(prompt("Ingrese la nota"));
    while(nota < 0 || nota > 10 || isNaN(nota))
    {
    nota = parseInt(prompt("Error. Ingrese la nota"));    
    }

    sexo = prompt("Ingrese su sexo");
    sexo.toLowerCase;
    while(!(sexo == "m" || sexo == "f"))
    {
    sexo = prompt("Error. Ingrese el sexo");
    sexo.toLowerCase;    
    }

    if(sexo = "m" && nota > 6)
    {
        contadorMmayor6++;
    }

    if(nota < notaMasBaja || flag == 0)
    {
    notaMasBaja = nota;    
    sexoNotaBaja = sexo;
    flag = 1;
    }

    acumulador = acumulador + nota;
    contadorNota++;

}
promedio = acumulador / contadorNota;
alert("El promedio de las notas es :"+promedio+ "\n La nota más baja es"+notaMasBaja+"\n El sexo de la persona con nota más baja es :"+sexoNotaBaja +"\n La cantidad de varones con nota mayor a 6 es :"+contadorMmayor6)



}
