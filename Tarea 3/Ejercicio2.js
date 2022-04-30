let n = 2
if(n >= 2){
    let primos = [];
    let numeros = [];
    for(let i = 0; i<=n; i++){
        numeros.push(true);    
    }
    console.log(numeros)
    for(let i = 2; i <= n; i++){
        if(numeros[i]){
            primos.push(i);
            console.log(primos)
         //Criba de Eratóstenes
            for(let j = 1; j * i <= n; j++){
                numeros[i * j] = false;
                //console.log(j)
            }
        }
    }
    console.log(primos);
}else{
    console.log("Ingrese un número mayor a uno")
}
