/*
let arragle=[1,2,3,'hola'];
console.log(arragle);

let objeto={
    nombre:'juan',
    puesto:'programador',
    edad:20,
    proyectos:{
        nombre:'tienda',
        version:1.5,
        des:'Una tienda online'
    }
}
console.log(objeto.proyectos.nombre);
*/
let objetos=[
    {
        nombre:'juan',
        puesto:'programador',
        edad:20    
    },
    {
        nombre:'maria',
        puesto:'programador',
        edad:25    
    },
    {
        nombre:'juana',
        puesto:'programador',
        edad:22    
    }
];
/*
console.log(objetos[0].nombre);
console.log(objetos[1].nombre);
console.log(objetos[2].nombre);
*/
for(let i=0;i<objetos.length;i++){
    console.log(objetos[i].nombre+' '+objetos[i].puesto);
}



