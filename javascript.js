/*
var array=[1,2,3,"hola",true,false];
//         0,1,2,3
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
*/
let colores=new Array("rojo","azul","verde");
//console.log(colores[0]);
console.log(colores);
//console.log(colores.toString());
//console.log(colores.length);
//colores.length=2;
//colores[colores.length]="amarillo";
//colores.push("amarillo");
//colores.pop();
//console.log(colores.shift());
//colores.unshift("blanco");
//colores.reverse();
//colores.sort();
//var colores2=colores.slice(2);
colores.splice(1,2,"violeta","morado");
console.log(colores);