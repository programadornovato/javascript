let personal=
[
    {
        "id":1,
        "nombre":"juan",
        "puesto":"sistemas",
        "estado":true
    },
    {
        "id":2,
        "nombre":"maria",
        "puesto":"sistemas",
        "estado":true
    },
    {
        "id":3,
        "nombre":"elena",
        "puesto":"contabilidad",
        "estado":true
    },
    {
        "id":4,
        "nombre":"pepe",
        "puesto":"contabilidad",
        "estado":true
    }
];

let texto=document.getElementById('texto');
let buscar=document.getElementById('buscar');
let res=document.getElementById('res');

texto.onkeyup=fil;
buscar.onclick=fil;
function fil(){
    res.innerHTML='';
    //alert(texto.value.toLowerCase());
    let textoMin=texto.value.toLowerCase();
    for(var i=0;i<personal.length;i++){
        let personalMin=personal[i].nombre.toLowerCase();
        if (personalMin.indexOf(textoMin) !== -1){
            res.innerHTML+='<li>'+personal[i].nombre+' de '+ personal[i].puesto +' </li>';
        }
    }
}

