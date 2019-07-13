let boton=document.getElementById('boton');
boton.onclick=function(){
    let xhttp=new XMLHttpRequest();
    xhttp.open('GET',"archivo.txt",true);
    xhttp.send();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200 ){
            //console.log(this.responseText);
            document.getElementById('con').innerHTML=this.responseText;
        }
    }
}