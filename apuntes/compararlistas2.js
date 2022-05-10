
const some = [3,7,5,2,3,-5]

const res = some.some(valor => valor < -4)
console.log(res)

const listaObjeto = [
	{nombre: "leire", edad: 35},
	{nombre: "Miguel", edad: 28},
	{nombre: "Laura", edad: 30},
	{nombre: "Juan", edad: 27},
	{nombre: "Luis", edad: 40}
]
const existe = listaObjeto.some(persona => persona.nombre == "Miguel")
console.log(existe)

const str = "Hola soy dev"
console.log(str[0])
const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2,3,"hola,",4])
const ar_set = Array.from(set)
console.log(ar_set)


const array = [1, 8, 3, 5, 10, 15, 2,]
const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)