//Paquete PROMP para ingresar datos como si fueramos un usuario
const prompt = require("prompt-sync")({ sigint: true });

//Mostrar numeros del 1-10
/*
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
*/

//while necesita tres cosas para ejecutarse
//1 contador,2condicionar la varible contador, contador++

/*
let contar = 0; //Cuantas veceses entramos en la estructura repetitiva

while (contar<=10) {//Aciones a repetir
    
    console.log(`El contador es ${contar}`);
    contar ++;
    
}
*/




let control = "si";
let nota;
let sumaNotas = 0;
let cantidad = 0;

console.log("Bienvenido al registro de notas");

while(control == "si"){
    console.log('Ingrese una nota a sumar');
    nota = parseInt(prompt('Nota alumno :___'));
    sumaNotas += nota; //Variable acumulativa con valores diferentes

    cantidad++;

    control = prompt('Escriba no para finalizar, si para agregar mas notas ');

}

let promedio = sumaNotas / cantidad;
console.log(`El promedio de las calificaciones es ${promedio}`);


/*
Reto: Adivina el número

Crea un programa que genere un número aleatorio entre 1 y 100. El usuario debe intentar adivinar el número. El programa debe dar pistas indicando si el número es mayor o menor al que ha introducido el usuario. El ciclo continuará hasta que el usuario adivine el número correcto.

Requisitos:

Usar un bucle while que continúe hasta que el usuario acierte.
Dar retroalimentación en cada intento ("El número es mayor" o "El número es menor").
Al final, mostrar el número de intentos que tomó adivinar el número correcto.
¿Te gustaría que te ayude con el código base o prefieres intentarlo tú primero?
*/