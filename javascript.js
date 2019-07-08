var accion = "div";
var numero1 = 10;
var numero2 = 0;
switch (accion) {
    case "suma":
        console.log("La suma es " + suma(numero1, numero2));
        break;
    case "resta":
        console.log("La resta es " + resta(numero1, numero2));
        break;

    case "mul":
        console.log("La mul es " + mul(numero1, numero2));
        break;

    case "div":
            console.log("La div es " + div(numero1, numero2));
        break;
    default:
        console.log("no se encontro nada");
}
function suma(num1, num2) {
    return num1 + num2;
}
function resta(num1, num2) {
    if (num2 >= num1) {
        return "El numero 2 no puede ser mayor al numero 1";
    }
    else {
        return num1 - num2;
    }

}
function mul(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    if(num2==0){
        return "Numero 2 no puede ser 0";
    }
    else{
        return num1 / num2;
    }
    
}