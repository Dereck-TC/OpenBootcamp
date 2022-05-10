let valor = 1
let factorial = 1
let num = 10

while(valor < num){ 
    valor++
    if(num > 10){
        console.log("ingrese un número menor a 11")
        break
    }else{
        factorial *= valor 
    }   
    console.log(factorial)
}

