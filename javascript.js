let boton=document.getElementById('boton');
let con=document.getElementById('con');
let cuerpo=document.getElementById('cuerpo');

boton.onclick=function(){
    con.innerHTML=
    '<button type="button" class="btn btn-primary">btn-primary</button>'+
    '<button type="button" class="btn btn-secondary">btn-secondary</button>'+
    '<button type="button" class="btn btn-danger">btn-danger</button>'+
    '<button type="button" class="btn btn-success">btn-success</button>'+
    '<button type="button" class="btn btn-warning">btn-warning</button>';
}
con.onclick=function(e){
    //e.preventDefault();
    //console.log(e.target.classList[1]); 
    let clase=e.target.classList[1];
    cuerpo.className=clase;
}

