//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

// let numero = 10
// let resultado = 1;
// for (let i = 1; i <= numero; i++){
//     resultado = resultado * i
// }
// alert('El factorial de 10 es '+resultado);

let numero = 10;
let resultado = 1;
let i = 1;

bucle: while (i <= numero+1){
    i++;
    resultado = resultado * i;
    if(i === numero){
        break bucle;
    }
}
alert('El factorial de 10 es '+resultado);

