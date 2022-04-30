
//BIFURCACIONES if...else

if(true){
    console.log("es verdadero")
}else{
    console.log("es falso")
}

if(false){
    console.log("es verdadero")
}else{
    console.log("es falso")
}
//************ EJEMPLO */
let saldo = 50;
let efectivo = 100;
if(efectivo < saldo){
    console.log("Puedes sacar dinero");
}else{
    console.log("Saldo insuficiente");
}

//If, else y elseif

let nota = 5;
if(nota === 5){
    console.log("Felicidades")
}else if(nota === 4){
    console.log("tu nota es 4")
}else{
    console.log("...")
}

//Sentencia Switch

let puntaje = 8;
switch(puntaje){
    case 5:
        console.log("sacaste 5");
        break; // corta la ejecución del bucle si la condición se cumple
    case 4:
        console.log("sacaste 4");
        break;
    case 3:
        console.log("sacaste 3");
        break;
    default:
        console.log("Error");
        break;
}