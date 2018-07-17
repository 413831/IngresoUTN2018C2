function mostrar()
{var planeta;

planeta = prompt ("Ingrese un planeta del sistema solar");

switch (planeta)
{
	case "venus" :
	case "mercurio" :
	case "marte" :
	alert("Acá hace más calor")
	break;
	case "tierra" :
	alert("Acá vivimos nosotros")
	break;
	case "urano" :
	case "jupiter" :
	case "saturno" :
	case "neptuno" :
	alert("Acá hace más frío")
	break;
	default :
	alert("Ese no es un planeta")
	break;

}
}