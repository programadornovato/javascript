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
let juan=new Personal("juan","contabilidad","2010,01,01");
console.log(juan.calculaAnos());

let maria=new Personal("maria","programador","2012,01,01");
console.log(maria.puesto);