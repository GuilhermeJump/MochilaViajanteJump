//#1

function adicionar(numA, numB){
    return numA + numB;

}

function subtracao(numA, numB){
    return numA - numB

}

function multiplicacao(numA, numB){
    return numA * numB

}

function divisao(numA, numB){
    return numA / numB

}

//#2

console.log (adicionar(2,2));
console.log (subtracao(15,5));
console.log (multiplicacao (10,5));
console.log (divisao(20,2));
console.log (divisao(10,0));


//#3

function quadradoDoNumero(num){
    return multiplicacao (num , num);

}

// console.log (quadradoDoNumero (11));

function mediaDeTresNumeros(numA, numB, numC){
    let somatorio = numA + numB + numC;
    return divisao (somatorio, 3);

}

// console.log (mediaDeTresNumeros ( 10, 20, 5));

let calculaPorcentagem = function(numTotal, percentual) {
    let porcentagem = multiplicacao(numTotal, divisao(percentual,100));
    return porcentagem

}

//console.log (calculaPorcentagem (300,15));

function geradorDePorcentagem(numA, numB){
    let 


}
