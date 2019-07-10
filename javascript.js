document.getElementById('boton').onclick=function(){
    fetch('archivo.txt')
    .then(data=>data.text())
    .then(data=>{
        //console.log(data);
        document.getElementById('con').innerHTML=data;
    })
}