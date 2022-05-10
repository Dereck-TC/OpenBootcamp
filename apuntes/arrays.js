let array1 = ["hola", 2, true, null]
let array2 = ["mundo",1,false,undefined]

console.log([...array1,...array2])
console.log([array1,array2])

const array = ["hola",1,2,null,undefined]
console.log(array.slice(1,4))
console.log(array.slice(1,-2))

let suma = 0
const arrayNums = [1,2,3,4,5,6]
arrayNums.forEach(valor => {
	suma += valor
	console.log(valor)
})
console.log(suma)

const variable = array.find(valor => {
	if(valor === 2){
		return true
	}
})
console.log(variable)

//metodos mas avabzados
//.map() .filter() . reduce()
const ciudades = ["Lima", "Barcelona", "Madrid", "Quito"]

const val = ciudades.map(valor => {
    return valor.concat("hola")
})
console.log(val)

const nuevo = ciudades.map((valor,indice) => {
    return `${indice + 1} - ${valor}`
})
console.log(nuevo)

//FILTER()

const listaObjeto = [
	{nombre: "leire", edad: 35},
	{nombre: "Miguel", edad: 28},
	{nombre: "Laura", edad: 30},
	{nombre: "Juan", edad: 27},
	{nombre: "Luis", edad: 40}
]
const edades = listaObjeto.filter(valor => {
    if(valor.edad > 30){
        return true

    }else{
        return false
    }
})
console.log(edades)

const nuevaList = listaObjeto.filter(valor => valor.nombre !== "Miguel")
console.log(nuevaList)

//REDUCE()
//sirve para obtener un valor a partir de una lista
const valores = [3,5,10,25]
const sum = listaObjeto.reduce((agr,cur)=> agr + cur.edad)

const sumaValores = valores.reduce((acumulado,cur,i,arrayOriginal)=>{
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(sumaValores)