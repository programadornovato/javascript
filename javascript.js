let nombre=document.getElementById('nombre');
/*
function retornaNombre(nombre){
    return 'Hola '+nombre;
}
*/
let retornaNombre = nombre => 'Hola '+nombre;
nombre.innerHTML=retornaNombre('novato');


let nombres=document.getElementById('nombres');
/*
function retornaNombres(nombre,apellido){
    return 'Hola '+nombre+apellido;
}
*/
let retornaNombres = (nombre,apellido) => nombre+' '+apellido;
nombres.innerHTML+=' '+retornaNombres('Programador','novato');
