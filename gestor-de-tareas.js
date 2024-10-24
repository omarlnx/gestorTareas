//Paquete PROMP para ingresar datos como si fueramos un usuario
const prompt = require("prompt-sync")({ sigint: true });

//Nombre de tarea
//Estus de la tarea
//crear oobjetos literales para cada una de las tareas


//array para almacenar todas las tareas, las carga el usuario

let tareas = [];
//la funcion recibe parametro nombre tarea,
function agregarTarea(nombreRecibido, fecha=null){
    //cargar tarea en formato de objeto
    tareas.push({nombre: nombreRecibido, 
                compleda: false,
                fechaLimiteRecibida: null});

}

//agregarTarea("Pasear al perro");

//inidce de la tarea que queremo eliminar
function eliminarTarea(indiceEliminar) {
    //verificar que el indice del arregloeste dentro del mismo
    if(indiceEliminar>0 && indiceDelArreglo<tareas.length){
        tareas.splice(indiceDelArreglo, 1);//Ingresa al arreglo y elimina una tarea
        consolelog("Tarea eliminada correctamente")
    }
    else{
        console.log("Indice de tarea incorrecto")
    }
    
}

//Marcar tarea completada
function completarTarea(indiceTarea) {

    if (indiceTarea>0 && indiceTarea<tareas.length) {
        tareas[indiceTarea].compleda=true;
        console.log("Tarea marcada como completada");
        
    } else {
        console.log("Indice incorrecto")
        
    }
    
}


//Modificar tarea ya asignada 0-3-5 etc

function modificarTarea(indiceModificar, nuevoNombre,nuevaFechaLimite = null) {

    if (indiceModificar>0 && indiceModificar<tareas.length) {
        //marcar la ruta donde modificar
        tareas[indiceModificar].nombre=nuevoNombre;
        if (nuevaFechaLimite !== null) {
            tareas[indiceModificar].fecha=nuevaFechaLimite;
            
        }
        console.log("Tarea modifeicada con éxito!");
        
    } else {
        console.log("Indice de tarea Invalido");
        
    }
    
}


//Funcion para mostrar el menu de opciones

function menuPrincipal() {
    console.log("---menu----");
    console.log("1.- Agregar tarea");
    console.log("2.- Eliminat tarea");
    console.log("3.- Marcar tarea como completada");
    console.log("4.- Modificar tarea");
    console.log("5.- Mostrar todas las tareas");
    console.log("0.- Salir")
    
}

//funcion para interactuar con el usuario

function interactuarUsuario() {
    let opcion = -1;

    while (opcion !=0) {
        menuPrincipal();
        opcion = parseInt(prompt("Ingresa la opcion seleccionada"))

        switch (opcion) {
            case 1:
                let nombreNuevaTarea = prompt("Ingresa la nueva tarea")
                //llamanos a la funcion agreagar tarea con el parametro
                agregarTarea(nombreNuevaTarea)
                       
                break;
            case 2:
                let indiceElminar = parseInt(prompt("Ingrese el indice a eliminar"));
                //Llamanos a la funcion eliminarTarea
                eliminarTarea(indiceElminar);

                break;
            case 3: 
                let estatusTarea = parseInt(prompt("Ingrese el indice para marcar como completada"));
                modificarTarea(estatusTarea);
                break;
            case 4:
                let indiceModificar = prompt("Ingresa el indice a modificar");
                let nuevoNombreTarea = prompt("Ingresa nuevo Nombre de la Tarea");
                let nuevaFecha; //opcinal
                modificarTarea(indiceModificar,nuevoNombreTarea);
                break;
            case 5:
                console.log("---lISTA DE TAREAS----");
                console.log(tareas);
        
            default:
                console.log("Opcion Invalida")
                break;
        }

    }



    
}


//Llamar a la funcion para interactuar con el usuario
interactuarUsuario();