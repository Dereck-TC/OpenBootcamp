
//Break y Continue

//labels: Nos permite nombrar los bucles for o while
//de esa manera podemos usar el break y continue de manera más controlada

let unidades = 0
let decenas = 0

bucleDecenas: while(true){  
    bucleUnidades: while(true){
        console.log(`el número actual: ${decenas}${unidades}`)
        unidades++
        if(unidades === 10){
            unidades = 0
            break bucleUnidades
        }
        if(decenas === 2){
            break bucleDecenas
        }
    }
    decenas++
    // if(decenas === 2){
    //     break bucleDecenas
    // }
}
console.log("Ya hemmos terminado")