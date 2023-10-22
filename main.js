//ejercicio 3 --- notas en letras

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
}