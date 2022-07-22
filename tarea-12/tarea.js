function listaNum(num){
    var valor = []
    valor[0] = 0
    valor[1] = 1
    for(var i=2 ; i<num ; i++){
        valor[i] = valor[i - 2] + valor[i - 1];
    }
    return valor;
}

console.log(listaNum(6))