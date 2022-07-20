//funcion que siempre devuelve true
function hola(){
    return true;
}
console.log(hola())

async function miPromesa() {
    const text = setTimeout(() => console.log("Hola soy una promesa"), 5000)
    return text
}

//funcion generadora
function* generarId(){
    let id = 0
    while(true){
        id+=2
        if(id === 10){
            return id
        }
        yield id
    }
}
const gen = generarId()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
