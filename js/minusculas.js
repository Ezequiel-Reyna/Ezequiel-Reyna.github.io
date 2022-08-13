function soloLetras(e)
{
key = e.keyCode || e.which;
tecla = String.fromCharCode(key).toString();
letras = "abcdefghijklmnopqrstuvwxyz";

especiales = [8,13,32];
tecla_especial = false
for(var i in especiales) {
if(key == especiales[i]){
 tecla_especial = true;
 break;
}
}

if(letras.indexOf(tecla) == -1 && !tecla_especial)
{
 alert("Ingresar sólo letras Minúsculas y sin acentos");
 return false;
}
}