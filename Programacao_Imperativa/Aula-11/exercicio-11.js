//Coleções de filmes

//1 - e nos pediram para passar todos os elementos para letras maiúsculas, o que
//na época tínhamos feito de forma &quot;manual&quot;. Vamos movê-lo para uma maneira mais
//automática usando loops.
function converterMaiusculo(arrayEntrada){
    for(let i = 0; i < arrayEntrada.length; i++){
        arrayEntrada[i] = arrayEntrada[i].toUpperCase()
    }
    return arrayEntrada;
}

let arrayFilmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];
// console.log(converterMaiusculo(arrayFilmes));


//Criação de outra estrutura
//2 - Agora precisamos modificar afunçãode passagemde elemento() que nos permite
//adicionar o conteúdo de nossa matriz de filme animado à matriz de filme original
let novosFilmes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
function concatArray(arrayEntrada, arrayConcat){
    for (let i = 0; i < arrayConcat.length; i++){
        arrayEntrada.push(arrayConcat[i].toUpperCase());
    }
    return arrayEntrada;
}

// console.log(concatArray(arrayFilmes, novosFilmes));

//3- Para este ponto se você decidiu trabalhar em um arquivo diferente em lugar
//para modificar o anterior, lembre-se que tivemos um infiltrado dentro de
//nossos filmes de animação que tivemos que tirar e salvar em outra variável
//antes de fazer a passagem de elementos de um array para outro!
function concatArray2(arrayEntrada, arrayConcat){
    ultimoItem = arrayConcat.pop();
    for (let i = 0; i < arrayConcat.length; i++){
        arrayEntrada.push(arrayConcat[i].toUpperCase());
    }
    return arrayEntrada;
}

let ultimoItem = '';
// console.log(concatArray2(arrayFilmes, novosFilmes));

//4 - Finalmente, devemos modificar nossa função comparadora para os filmes
// como temos feito até agora.
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones(asia, europa) {
    let comparacionesAsiaEuropa = []
    for (let i = 0; i < asia.length; i++){
       comparacionesAsiaEuropa[i] = asia[i] === europa[i] ? 'Igual' : 'Diferente';
    }
    return comparacionesAsiaEuropa; 
}

console.log(compararCalificaciones(asiaScores, euroScores));
