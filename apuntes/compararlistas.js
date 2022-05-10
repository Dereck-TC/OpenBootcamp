//.sort() ordenar listas
//sort modifica el array

const array = [1, 8, 3, 5, 10, 15, 2,]
array.sort((a,b)=>{
    return -1
})
console.log(array)
// invierte el array con -1


array.sort((a,b)=>{
    if(a < b){
        return -1
    }else if(a > b){
        return 1
    }else{
        return 0
    }
})
console.log(array)

//ordenar únicamente arrays numéricos
const arrayNum = [7,6,25,80,56,22,0]
arrayNum.sort((a, b) => a - b) //de menor a mayor y b - a de mayor a menor
console.log(arrayNum)

//Array de objetos 
const listaObjeto = [
	{nombre: "leire", edad: 35},
	{nombre: "Miguel", edad: 28},
	{nombre: "Laura", edad: 30},
	{nombre: "Juan", edad: 27},
	{nombre: "Luis", edad: 40}
]
listaObjeto.sort((a,b) => {
    if(a.edad < b.edad){
        return -1;
    }else if(a.edad > b.edad){
        return 1;
    }else{
        return 0;
    }
})

listaObjeto.sort((a,b) => a.edad - b.edad)
console.log(listaObjeto)

//COMPARAR listas
//.every() decirnos si todos los componentes de una lista cumplen con la condicion

const comparar = [4,6,8,2,30,14,25,-5]
const resultado = comparar.every(valor => {
    if(typeof valor === "number"){
        return true;

    }else{
        return false;
    }
})
console.log(resultado)
const resultado2 = comparar.every(valor => {
    if(valor > 0){
        return true;

    }else{
        return false;
    }
})
console.log(resultado2)

const resultado3 = comparar.every(valor => valor > 0)
console.log(resultado3)

//comparar listas
const ar1 = [1,2,3,4];
const ar2 = [1,2,3,4];

console.log(ar1 === ar2)

const compararArrays = (array_1 ,array_2) => {
    
   const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}
console.log(compararArrays(ar1, ar2))
