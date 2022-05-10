let nom = "Dereck";
let ape = "Tello";
let estudiante = `Estudiante: ${nom} ${ape}`;
console.log(estudiante);
let estudianteMayus = (`Estudiante: ${nom} ${ape}`).toUpperCase();
console.log(estudianteMayus)
let estudianteMin = (`Estudiante: ${nom} ${ape}`).toLowerCase();
console.log(estudianteMin)
let longitud = estudiante.length;
console.log(longitud);
let primeraletra = nom.charAt(0)
console.log(primeraletra)
let ultimaletra = ape.charAt(ape.length-1);
console.log(ultimaletra)
let sinEspacio = estudiante.replace(/ /g,"");
console.log(sinEspacio)
let bool = estudiante.includes(nom);
console.log(bool)