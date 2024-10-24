//Paquete PROMP para ingresar datos como si fueramos un usuario
const prompt = require("prompt-sync")({ sigint: true });


//Proyecto calculadora 
//Creamos una funcion para sumar dos numeros cualquiera y retorna el valor de la variable resultado

function sumar(a,b){
    let resultadoSuma = a + b;
    return resultadoSuma;
}

//Creamos una funcion para restar dos numeros cualquiera y retorna el valor de la variable resultado
function restar(a,b){
    let resultadoResta = a - b;
    return resultadoResta;
}

//Creamos una funcion para multiplicar dos numeros cualquiera y retorna el valor !DE LA OPERACION A*B
function multiplicar(a,b){
    return a * b;
}

//Creamos una funcion para dividir dos numeros cualquiera,considerar que la division por 0 esta excluida retormar el valor de la operacion a/b

function dividir(a,b){
    if (b===0) {
        return 'No se puede dividir por 0';
    }
    else{
        return a/b;
    }
}

console.log('BIENVENIDO A SU CALCULADORA DIGITAL ¿QUÉ OPERACIÓN DESEA REALIZAR?');
console.log('1 -> SUMA');
console.log('2 -> RESTA');
console.log('3 -> MULTIPLICACIÓN');
console.log('4 -> DIVISION');
let selecionOpcion = parseInt(prompt('Ingresa la opcion deseada:'));
console.log(`Elegiste la operacion ${selecionOpcion}`);

let num1, num2, resultado;

switch (selecionOpcion) {
    case 1:
        num1 = parseInt(prompt(console.log('Ingresa el primer valor a sumar')));
        num2 = parseInt(prompt(console.log('Ingresa el segundo valor a sumar')));
        resultado = sumar(num1,num2);
        console.log(`El resultado de la suma de ${num1} + ${num2} = ${resultado}`);
        break;
    case 2:
        num1 = parseInt(prompt(console.log('Ingresa el primer valor a restar')));
        num2 = parseInt(prompt(console.log('Ingresa el segundo valor a restar')));
        resultado = restar(num1,num2);
        console.log(`El resultado de la resta de ${num1} + ${num2} = ${resultado}`);
        break;
    case 3:
    num1 = parseInt(prompt(console.log('Ingresa el primer valor a multiplicar')));
    num2 = parseInt(prompt(console.log('Ingresa el segundo valor a multiplicar')));
    resultado = multiplicar(num1,num2);
    console.log(`El resultado de la multiplicación de ${num1} x ${num2} = ${resultado}`);
    break;
    case 4:
        num1 = parseInt(prompt(console.log('Ingresa el primer valor a dividir')));
        num2 = parseInt(prompt(console.log('Ingresa el segundo valor a dividir')));
        resultado = dividir(num1,num2);

        if (typeof resultado == "string") {
            console.log(resultado)
        } else {
            console.log(`El resultado de la division de ${num1} / ${num2} = ${resultado}`);            
        }
    break; 
    default:
        console.log('Ingresa una opcion Correcta! ');
}