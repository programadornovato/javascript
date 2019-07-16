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
document.addEventListener('DOMContentLoaded',MostrarBD);
function MostrarBD(){
    listaTareas.innerHTML="";
    //console.log(localStorage.getItem('tareas'));
    arrayTareas=JSON.parse(localStorage.getItem('tareas'));
    for(var i=0;i<arrayTareas.length;i++){
        if(arrayTareas[i].estado===true){
            listaTareas.innerHTML+=`
            <div class="alert alert-primary" role="alert">
                <i class="fa fa-list" aria-hidden="true"></i>
                <strong>${arrayTareas[i].tarea}</strong>--${arrayTareas[i].estado}
                <span class="float-right">
                <i class="fa fa-check ml-3" aria-hidden="true"></i>
                <i class="fa fa-trash" aria-hidden="true"></i>
                </span>
            </div>
            `;
        }
        else{
            listaTareas.innerHTML+=`
            <div class="alert alert-danger" role="alert">
                <i class="fa fa-list" aria-hidden="true"></i>
                <strong>${arrayTareas[i].tarea}</strong>--${arrayTareas[i].estado}
                <span class="float-right">
                <i class="fa fa-check ml-3" aria-hidden="true"></i>
                <i class="fa fa-trash" aria-hidden="true"></i>
                </span>
            </div>
            `;
        }
    }
}
listaTareas.onclick=function(e){
    e.preventDefault();
    //console.log(e.target.classList[1]);
    if(e.target.classList[1]==="fa-check"  || e.target.classList[1]==="fa-trash"  ){
        //console.log(e.target.classList[1]);
        let nombreTarea=e.target.parentNode.parentNode.querySelector('strong').innerHTML;
        //console.log(nombreTarea);
        if(e.target.classList[1]==="fa-trash"){
            elimarDB(nombreTarea);
        }
        else{
            editarDB(nombreTarea);
        }
    }
}
function elimarDB(nombreTarea){
    arrayTareas.forEach((elemento,index)=>{
        //console.log(elemento.tarea+"  "+index);
        if(elemento.tarea==nombreTarea){
            //console.log(arrayTareas);
            arrayTareas.splice(index,1);
            //console.log(arrayTareas);
        }
    });
    GuaradarBD();
}

function editarDB(nombreTarea){
    for(var i=0;i<arrayTareas.length;i++){
        if(arrayTareas[i].tarea===nombreTarea){
            arrayTareas[i].estado=true;
        }
    }
    GuaradarBD();
}
