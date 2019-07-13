let boton=document.getElementById('boton');
let con=document.getElementById('con');
boton.onclick=function(){
    let xhtml=new XMLHttpRequest();
    xhtml.open('GET','data.json',true);
    xhtml.send();
    xhtml.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText);
            let data=JSON.parse(this.responseText);
            //console.log(data);
            con.innerHTML='';
            for(var i=0;i<data.length;i++){
                //console.log(data[i].nombre);
                con.innerHTML=con.innerHTML+
                '<tr>'+
                '<th scope="row">'+data[i].id+'</th>'+
                '<td>'+data[i].nombre+'</td>'+
                '<td>'+data[i].puesto+'</td>'+
                '<td>'+data[i].estado+'</td>'+
                '</tr>';

            }
        }
    }
}
