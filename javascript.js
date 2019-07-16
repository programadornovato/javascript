let formulario=document.getElementById('formulario');
let tarea=document.getElementById('tarea');
let listaTareas=document.getElementById('listaTareas');

let arrayTareas=[];

let item={
    tarea:"",
    estado:false
}

function agregarTarea(texto){
    item={
        tarea:texto,
        estado:false
    }
    arrayTareas.push(item);
}
/*
agregarTarea("comer");
agregarTarea("beber");
console.log(arrayTareas);
*/
formulario.onsubmit=function(e){
    e.preventDefault();
    let textoTarea= tarea.value;
    agregarTarea(textoTarea)
    console.log(arrayTareas);
    tarea.value="";
    GuaradarBD();
}
function GuaradarBD(){
    localStorage.setItem('tareas',JSON.stringify(arrayTareas));
    MostrarBD();
}
function MostrarBD(){
    console.log(localStorage.getItem('tareas'));
}