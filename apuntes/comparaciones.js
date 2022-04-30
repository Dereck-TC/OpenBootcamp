
// COMPARACIONES

// Igualdad
if(5 == 5){
    console.log("5 es igual a 5");
}

if(5 == 5){
    console.log("5 muy es igual a 5");
}

let a = 5;
console.log(typeof a)
let b = "5";
console.log(typeof b)
//== solo compara el valor
//=== compara el valor y el tipo
if(a == b){
    console.log("A es igual a B");
}//Igualdad débil

if(a === b){
    console.log("A es muy igual a B");
}//Igualdad fuerte

let c = 4;
console.log(typeof a)
let d = "4";
console.log(typeof b)
//== solo compara el valor
//=== compara el valor y el tipo
if(c != d){
    console.log("A es diferente a B");
}//Igualdad débil

if(c !== d){
    console.log("A es muy diferente a B");
}//Igualdad fuerte