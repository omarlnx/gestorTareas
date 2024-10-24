/*


for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] + " esta en la posicion " + i );
    
}

//Reemplazar los numero por numeros de 1 hasta n.l-1

for (let i = 0; i < numeros.length; i++) {
    
    numeros[i] = i + 1;
    
}

console.log('reemplazamos lo valores por el consecutivo');

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] + " esta en la posicion " + i );
    
}

console.log('reemplazamos lo valores por el mayor menor');

//Reemplazar los numero por numeros mayormenor

for (let i = numeros.length-1; i >= 0; i--) {
    
    numeros[i] = numeros.length - i;
    
}

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] + " esta en la posicion " + i );
    
}


console.log('******************************')


let notas = [6,7,8,9,10,7,4];

console.log(`El arreglo tiene ${notas.length} elementos`);

notas[notas.length] =['calificacion final']
console.log(`El arreglo tiene ${notas.length} elementos`);

let calificacionSelecionada = notas[notas.length-1];
console.log(calificacionSelecionada);

//Paquete PROMP para ingresar datos como si fueramos un usuario
const prompt = require("prompt-sync")({ sigint: true });



let nombresClientes = [];
nombresClientes[nombresClientes.length]=prompt('tu nombre: ');
console.log(nombresClientes);
nombresClientes[nombresClientes.length]=prompt('tu nombre: ');

*/

/*
//Realizar el promedio del siguiente array
let numeros = [1,2,3,4,5,6,];
let sumanumeros = 0;
let promedio = 0;


numeros[numeros.length]=(-200);

for(let i = 0; i<numeros.length; i++){
    sumanumeros = sumanumeros + numeros[i];
    
    
}
promedio= sumanumeros/numeros.length
console.log(promedio);

*/

//Encontar el numero mayor y el menor


let numeros = [12,230,-1,100];
let menor= numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]<menor) {
        menor=numeros[i];
    }
    
}
console.log(menor)

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]>menor) {
        menor=numeros[i];
    }
    
}
console.log(menor)
