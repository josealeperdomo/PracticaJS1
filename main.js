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

//1

function factorial(num){
    if (num < 0){ 
        return console.log('Un numero negativo no puede tener factorial');;
    }else if(num == 0){
      return 1;
    }else{
      return (num * factorial(num - 1));
    }
}
console.log(factorial(5));

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