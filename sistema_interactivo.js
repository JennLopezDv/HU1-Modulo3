/*let nombre = "Jennifer"
console.log(nombre)*/

let nombre = prompt("Ingrese su nombre: ");
let edad = Number(prompt("Ingrese su edad: "));

/*Comprobar que el valor ingresado en edad es número, sino
*/
if (Number.isNaN(edad)) {
    console.error("Error: Por favor, ingresa una edad válida en números.");
} else {
    console.log("Edad válida.")
}


//Si la edad es menor a 18//
if (edad < 18){
 alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`)}

 //Si la edad es mayor o igual a 18//
 else if (edad >= 18){
    console.log(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`)
 }
 
 else{
    console.log("Edad inválida.")
 }

