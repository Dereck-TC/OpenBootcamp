//Listas, array o arreglo
const lista = [1, "hola", true, undefined, null]
const lista2 = new Array(2, "hola", true, undefined, null)
const lista3 = new Array(3);
lista3[0] = "primer";
const lista4 = [lista, lista2, lista3];

console.log(lista)
console.log(lista3)
console.log(lista4)

//Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca:"Xiaomi",
    estado: false,
    constactos:["Gorka","Martin","Raúl"],
    tarjeta:{
        marca:"Sandisk",
        almacenamiento: 32
    },
    //también se puede definir entre comillas
    "altura-tarjeta": 4
}
//Agregar nuevas propiedades
movil.año = 2019;
//Editar propiedades
movil.marca="Samsung"
//No podemos volver a declarar otro objeto con el mismo nombre


console.log(movil)
//Accediendo a sus atributos
console.log(movil.constactos)

//Fechas
//Librerias de apoyo: Moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10)//Utilizando milisegundos
console.log(fecha_milis);

const fecha_candena = new Date("march 25 2020");
console.log(fecha_candena);

const fecha_valores = new Date(2022, 0, 15); //Los meses inician en cero 0
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1; 
const anyo = ahora.getFullYear();

console.log(dia,mes,anyo)