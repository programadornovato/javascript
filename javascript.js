// IIFE Immediately Invoked Function Expression (Funciones que son invocadas inmediatamente)
/*
function trabaja(accion){
    alert("Estoy trabajando en "+accion);
}
trabaja("compras");
*/
/*
(function trabaja(accion){
    alert("Estoy trabajando en ");
})("programacion");
*/

((accion)=>{
    alert("Estoy trabajando en "+accion);
})("el bar mi oficina");

