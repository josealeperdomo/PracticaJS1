//ejercicio 3 --- notas en letras
/*
let estudiante = {
    nombre:prompt('ingrese su nombre'),
    edad: parseInt(prompt('ingrese su edad')), 
    nota1: parseInt(prompt('ingrese su nota 1')),
    nota2: parseInt(prompt('ingrese su nota 2')), 
    nota3: parseInt(prompt('ingrese su nota 3')) 
}

estudiante.ResultadoFinal = ( estudiante.nota1 + estudiante.nota2 + estudiante.nota3 ) / 3

console.log(estudiante);

if(estudiante.ResultadoFinal === 20){
    console.log('FELICIDADES OBTUVISTE LA MÁXIMA CALIFICACIÓN (A+)');
}else if (estudiante.ResultadoFinal >= 18 && estudiante.ResultadoFinal <= 19){
    console.log('SU CALIFICACIÓN EN LETRAS ES A');
}else if (estudiante.ResultadoFinal >= 16 && estudiante.ResultadoFinal < 18){
    console.log('SU CALIFICACIÓN EN LETRAS ES B');
}else if (estudiante.ResultadoFinal >= 14 && estudiante.ResultadoFinal < 16){
    console.log('SU CALIFICACIÓN EN LETRAS ES C');
}else if (estudiante.ResultadoFinal >= 10 && estudiante.ResultadoFinal < 14){
    console.log('SU CALIFICACIÓN EN LETRAS ES D');
}else if (estudiante.ResultadoFinal < 10){
    console.log('SU CALIFICACIÓN EN LETRAS ES F');
}

if(estudiante.edad >= 18 && estudiante.ResultadoFinal >= 10){
    console.log('Aprobaste!');
}else{
    console.log('Estas desaprobado');
} */

//Detector de numeros primos

let numero = 19

if(numero <= 1){
    console.log('no es primo');
}else if(numero === 2 || numero === 3 || numero === 5 || numero === 7){
    console.log('es primo');
}else if(numero % 2 === 0 || numero % 3 === 0 ||numero % 5 === 0 || numero % 7 === 0){
    console.log('no es primo');
}else{
    console.log('es primo');
}

//Calculadora factorial

function factorial(num){
    if (num < 0){ 
        return -1;
    }else if(num == 0){
      return 1;
    }else{
      return (num * factorial(num - 1));
    }
}
console.log(factorial(7));

/* Ejercicios para practicar */
/*
1) Crea una función para obtener el factorial de un numero.
2) Crea una función que tome un array y un elemento, que añada el elemento al final del array.
3) Crea una función que tome un array y elimine el primer elemento.
4) Crea una función que tome un array de números  y devuelva un nuevo array que contenga solo los números impares.
5) Crea una función que tome un array y un elemento, y elimine todas las ocurrencias de ese elemento en el array.
6) Dada la siguiente frase = "JavaScript es un lenguaje de programación versátil y poderoso.";
   * Contar el numero de palabras en la frase. 
   * Reemplazar una palabra especifica de la frase.
   * Convertir la frase en un array de palabras y ordenarlas alfabéticamente.
   * Convertir toda la frase en Mayúsculas.
*/

//2
let frutas = ['Banana', 'Naranja', 'Manzana', 'Melon']
console.log(frutas);

function arraymas(array, elemento) {
    return array.push(elemento)
}

arraymas(frutas,'Pera')
console.log(frutas);

//3
function arraymenos(array){
    return array.shift()
}

arraymenos(frutas)
console.log(frutas);

//4
let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const numerosimpares = numeros.filter(function (num) {
    return num % 2 !== 0
})

console.log(numerosimpares);

//5
let frutas2 = ['Banana', 'Naranja', 'Manzana', 'Melon', 'Banana', 'Banana', 'Banana']

let frutas3 = ['lulo', 'manzana', 'higo', 'manzana', 'papaya', 'higo',  'mango', 'pera', 'higo', 'uva', 'guanábana', 'higo', 'guayaba', 'higo', 'fresa', 'frambuesa', 'limón', 'mora', 'higo', 'piña', 'toronja', 'manzana', 'maracuyá', 'manzana', 'naranja', 'manzana', 'arándano', 'jugo', 'manzana', 'higo' ]
console.log(frutas3.sort());

function eliminar(array, elemento) {
    array.sort()
    let ubicacion = array.indexOf(elemento)
    array.reverse()
    let largo = array.length
    let cantidad = largo - (array.indexOf(elemento) + ubicacion)
    array.sort()
    array.splice(ubicacion, cantidad);
    return array
}

console.log(eliminar(frutas3, 'manzana'));
console.log(eliminar(frutas3, 'higo'));
console.log(eliminar(frutas2, 'Banana'));


//6
let texto = 'JavaScript es un lenguaje de programación versátil y poderoso.'

//------------------------------------------------------
let cantidadPalabras = texto.split(' ')
console.log(cantidadPalabras.length);
//------------------------------------------------------
//------------------------------------------------------
console.log(texto.replace('JavaScript', 'Python'));
//------------------------------------------------------
//------------------------------------------------------
let arraytexto = texto.split(' ')
console.log(arraytexto.sort());
//------------------------------------------------------
//------------------------------------------------------
console.log(texto.toUpperCase());
//------------------------------------------------------