// let i = 0
// let max = 10
// for(let y = 2; y < max; y++){
//     console.log(y)
//     // while((i-1) < y){
//     //     if(y%i==0){
//     //         console.log("El número " + y + " no es primo")
//     //     }else{
//     //         console.log("El número " + y + " es primo")
//     //     }
//     //     i++
//     // }   
//     for(i = 0; i < y; i++){
//         if(y%i==0){
//             console.log(y)
//         }
//     }
// }
// var array1=[];
// var array2=[];
// var longArray1=50;
// var divisor=2;
// var primo=true;
// var contador1,i,numero;
// for (i=0;i<=longArray1;i++) {
//     primo = true;
//     divisor = 2;
//     numero=array1[i];
//     while (divisor<numero) {    
//         if (numero % divisor==0) {
//             primo=false;
//             break;
//         }
//         divisor++;
//     }
//     if (primo) {
//         array2.push(numero);
//     }
    
// }


// let nume = 4
// for(let u = 2; u < nume; u++){
//     if(nume%u==0){
//         return false;
//     }
    
// }
// return false


//var n = 9
//var esprimo = true

// if(n===1){
//     esprimo = false
// }else{
//     for(var i = 2; i<n; i++){
//         if(n % i == 0){ 
//             esprimo = false
//         }   
//         if(n === 1){
//             esprimo = false  
//         }
//     }
// }
// console.log(esprimo)
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

mibucle:
for (let numero = 0; numero < 11; numero++) {
  if (numero <= 1) {
    console.log(numero);
    continue mibucle;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      console.log(numero);
      continue mibucle;
    }
  }
  console.log(numero + " es número primo");
}
