/*
let nom="maria";
function personal(nombre,puesto) {
    console.log("nombre="+nombre+" puesto="+puesto);
}
personal("eugenio","programador");
*/
class Personal{
    constructor(nombre,puesto, fechaContrato){
        this.nombre=nombre;
        this.puesto=puesto;
        this.fecha=fechaContrato;
        //console.log("nombre="+nombre+" puesto="+puesto);
    }
    calculaAnos() {
        let hoy = new Date();
        let cumpleanos = new Date(this.fecha);
        let anos = hoy.getFullYear() - cumpleanos.getFullYear();
        let m = hoy.getMonth() - cumpleanos.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            anos--;
        }
        return anos;
    }
}
class Vacaciones extends Personal{
    constructor(nombre,puesto, fechaContrato,extra=0){
        super(nombre,puesto, fechaContrato);
        this.extra=extra;
    }
    diasVaciones(){
        let anos=this.calculaAnos();
        if(anos===0){
            return 0+this.extra;
        }
        if(anos>=1 & anos <=5){
            return 5+this.extra;
        }
        if(anos>=6 & anos <=10){
            return 10+this.extra;
        }
        if(anos>=11){
            return 12+this.extra;
        }
    }
}
/*
let juan=new Personal("juan","contabilidad","2010,01,01");
console.log(juan.calculaAnos());

let maria=new Personal("maria","programador","2012,01,01");
console.log(maria.puesto);
*/
let ana=new Vacaciones("ana","archivo","2015-01-01",2);
console.log(ana.diasVaciones());

let eugenio=new Vacaciones("eugenio","programacion","2015-01-01");
console.log(eugenio.diasVaciones());
