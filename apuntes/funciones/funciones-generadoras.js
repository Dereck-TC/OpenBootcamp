function* generaId(){
    let id = 0
    while(true){
        id++
         //es un tipo de return que lo que hace es que en vez de salir de la funcion se queda aquí esperando
        if(id===5){
            return id
        }
        yield id
    }   
}

const gen = generaId();

console.log(gen.next()) //{value:1, done: false}
console.log(gen.next()) //{value:2, done: false}
console.log(gen.next()) //{value:3, done: false}
console.log(gen.next()) //{value:4, done: false}
console.log(gen.next()) //{value:5, done: true}