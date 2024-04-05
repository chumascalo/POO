// Crea una variable llamada nombreUsuario y
// otra llamada contraseña que almacene un nombre de usuario
// y una contraseña, respectivamente. Escribe un programa
// en JavaScript que verifique si el nombre de usuario es
// "usuario123" y la contraseña es "secreto". Si ambos
// son correctos, imprime "Acceso concedido"; de lo contrario,
// imprime "Acceso denegado". Utiliza una declaración "if"
// para realizar la verificación

function nombreUsuario()
{

let concedidoDenegado = "";
let nombreUsuario =  prompt("ingrese su nombre de usuario: ")
let contraseña = prompt("igrese su contraseña: ")

if (nombreUsuario == "usuario123" || contraseña== "secreto" )
{
    concedidoDenegado = "acceso concedido";

}
else{
    concedidoDenegado = "acceso denegado";
}
document.getElementById("lista").innerHTML =concedidoDenegado
} 