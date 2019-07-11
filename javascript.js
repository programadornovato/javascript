document.getElementById('boton').onclick=function(){
    fetch('data.json')
    .then(data=>data.json())
    .then(data=>{
        console.log(data);
        for(var i=0;i<data.length;i++){
            document.getElementById('registros').innerHTML=document.getElementById('registros').innerHTML+
            "<tr>"+
                "<td scope='row'>"+data[i].id+"</td>"+
                "<td>"+data[i].nombre+"</td>"+
                "<td>"+data[i].puesto+"</td>"+
                "<td>"+data[i].estado+"</td>"+
            "</tr>";
        }
    })
}