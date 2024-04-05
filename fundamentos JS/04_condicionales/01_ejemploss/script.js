
function identificarMayorEdad()
{
let resultado ="";

let edad = prompt("porfavor ingrese su edad: ");

if (edad >= 18) {
resultado = `es mayor de edad- tiene: <h2>${edad}</h2>`
} else {
    resultado = `es menor de edad- tiene: <h2>${edad}</h2>`
}
document.getElementBlyId('lista').innerHTML = resultado;


}



