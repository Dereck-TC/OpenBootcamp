//Bucles FOR

// for(inicializacion; condicion; actualizacion){

// }
// i = i + 1
// i += 1
// i++
for( let i = 0; i < 10 ; i+=2 ){
    console.log(i);
}
let lista=[1,4,6,2,3,7,10,12];
for(let i = 0; i<lista.length; i++){
    console.log(lista[i])
}

//Estructura For...Of
for (let valor of lista){
    console.log(valor)
}

//Estructura ForEach
lista.forEach(valor => {
    console.log(valor)
})

//Estructura FonIn

let persona = {
    nombre: "Dereck",
    apellido: "Tello",
    edad: 20,
    isDeveloper: true
}
let prop = "edad";
console.log(persona[prop])

for(let propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}


//      BUCLE WHILE
let i = 0;
let max = 10;
while (i < max){
    console.log(i);
    i++;
}

//Do...While
//En el do siempre se ejecuta
i = 15;
do{
    console.log(i)
    i++;
} while(i < max)

//Casos muy específicos: BREAK y CONTINUE
let lista2 = [1,2,3,4,5,6,7,8];

for(let i = 0; i < lista2.length; i++){

    if(lista2[i] ===3 ){
        continue;//identifica el valor de la condición, pausa el bucle y lo vuelve a ejecutar
    }
    console.log(lista2[i]);

    if(lista2[i]>5){
        break;// detiene el bucle si la condición se cumple
    }
}

//el ambito de un bucle

//el alcance de las variables de un bucle
console.log(i)