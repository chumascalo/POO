function identificarMayor()
{
let resultado = "";

let num1 = prompt("porfavor ingrese el primer numero: " );
let num2 = prompt("ingrese el segundo: ")

if (num1 > num2 ){
    resultado =`el numero ${num1} es mayor que ${num2} `

}
else if (num1< num2 )
{
    resultado = `el numero  ${num2} es mayor que ${num1}`

} 
else
{
resultado = `los numeros son iguales`
}

}
