const datosPersonales = {
    nombre : "Dereck",
    apellido: "Tello",
    Edad: 20,
    Altura: "1.70 cm",
    eresDesarrollador: true
}

let edad = datosPersonales.Edad
console.log(edad)
const datosAmigos = {nombre: "Leo", apellido: "García", Edad: 19 , Altura: "1.75 cm", eresDesarrollador: false}
const lista = [datosPersonales, datosAmigos]
console.log(lista)
const ordenar = lista.sort((a,b) => a.Edad - b.Edad)
console.log(ordenar)