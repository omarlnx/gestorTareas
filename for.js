//Paquete PROMP para ingresar datos como si fueramos un usuario
const prompt = require("prompt-sync")({ sigint: true });

//Mostrar los numeros de 1 al 10

let i = 0; //variable contadora


for(i = 10; i >= 1; i--){
    console.log('Iteracion inversa numero ' + i);
}