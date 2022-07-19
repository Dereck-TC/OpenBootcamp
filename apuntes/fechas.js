const fecha = new Date()

console.log(fecha)

//los meses inician en cero
const fecha2 = new Date(2001,10, 26)
console.log(fecha2)

const fecha3 = new Date(-1000000000000000) // milisegundos
console.log(fecha3)

console.log(fecha > fecha2)

const fecha5 = new Date(2001,10, 26)

console.log(fecha2 === fecha5)
console.log(fecha2.getTime() === fecha5.getTime())

//obtener el día
console.log(fecha2.getDate())
//obtener el mes
console.log(fecha2.getMonth() + 1)
//obtener el año
console.log(fecha2.getFullYear())

//fecha en un string
console.log(fecha2)

//.toLocaleDateString
console.log(fecha2.toLocaleDateString("en-US"))

