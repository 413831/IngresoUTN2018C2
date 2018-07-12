function mostrar()
{var num1 = prompt("Ingrese un número");
var num2 = prompt("Ingrese un número");
var resultado;

if(num1 == num2)
{
    alert(num1+num2);
}

else if(parseInt(num1) > parseInt(num2))
{
    resultado = num1 - num2;
    alert("El resultado es "+resultado);
}
else
{
    resultado = parseInt(num1) + parseInt(num2);
    
    if(resultado > 10)
    {
    alert(+resultado);
    alert("La suma es "+resultado+" y superó el 10");
    }
    else
    {
    alert("El resultado es "+resultado);
    }
}
}