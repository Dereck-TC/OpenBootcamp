const compra = ["pan","leche","arroz","tomates","pollo"]
compra.push("Aceite de Girasol")
console.log(compra)
compra.pop()
console.log(compra)
const pelis = [
    peli1={
        titulo:"Doctor Strange",
        director: "Saim Remi",
        fecha: "2022"
    },
    peli2={
        titulo:"Misión imposible",
        director: "director de mision imposible",
        fecha: "2009"
    },
    peli3={
        titulo:"Piratas del Caribe",
        director: "D. piratas del C.",
        fecha: "2012"
    },
]

const filtrarpelis = pelis.filter(valor => valor.fecha > 2010)
console.log(filtrarpelis)
const directores = pelis.map(valor => valor.director)
console.log(directores)
const titulos = pelis.map(valor => valor.titulo)
console.log(titulos)

const peliculas = directores.concat(titulos)
console.log(peliculas)

const propagacion = [...directores,...titulos]
console.log(propagacion)