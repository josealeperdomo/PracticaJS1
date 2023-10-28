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

//EJERCICIO 27/10
/*
    Crear una clase llamada Personaje, que tenga los siguientes atributos:
    nombre, apodo, edad, salud, fuerza, rareza, y que tenga los siguientes metodos:
    atacar, defender, saludar (Estos metodos deben imprimir en consola, solo eso (get)).
    Debes crear 5 personajes con diferentes atributos y ejecutar los metodos de cada uno.
*/

class Personaje{
    constructor(nombre,apodo,edad,salud,fuerza,rareza){
        this._nombre = nombre
        this._apodo = apodo
        this._edad = edad
        this._salud = salud
        this._fuerza = fuerza
        this._rareza = rareza
    }
    get atacar(){
        return console.log(`${this._nombre} está atacando`);
    }
    get defender(){
        return console.log(`${this._nombre} se está defendiendo`);
    }
    get saludar(){
        console.log(`Hola, soy ${this._nombre}`);
    }
}

let personaje1 = new Personaje('PacMan', 'Comefantasmas', 20, 100, 5, 'Especial')
let personaje2 = new Personaje('Sonic', 'Erizo', 17, 100, 8, 'Raro')
let personaje3 = new Personaje('Kratos', 'Dios de la Guerra', 200, 100, 10, 'Legendario')
let personaje4 = new Personaje('Kang', 'El Conquistador', 40, 100, 10, 'Epico')
let personaje5 = new Personaje('Galactus', 'El Devorador de mundos', 500, 100, 10, 'Legendario')

console.log(personaje1);
personaje1.atacar
personaje1.defender
personaje1.saludar

console.log(personaje2);
personaje2.atacar
personaje2.defender
personaje2.saludar

console.log(personaje3);
personaje3.atacar
personaje3.defender
personaje3.saludar

console.log(personaje4);
personaje4.atacar
personaje4.defender
personaje4.saludar

console.log(personaje5);
personaje5.atacar
personaje5.defender
personaje5.saludar
