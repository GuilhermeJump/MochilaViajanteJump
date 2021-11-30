let numero = [1,2,3];

let dobro = numero.map(function(item){
    // console.log(item);
    return item * 2;
});

// console.log(dobro);

let idades = [22,25,14,19,15];

let maiores = idades.filter(function(item){
    return item >=18;
});

// console.log(maiores);

let soma = numero.reduce(function(acumulador, item) {
    // console.log(acumulador, item);
    return acumulador+ item;
});

// console.log(soma);

// foreach não tem retorno
let paises = [ 'Brasil', 'Cuba', 'Russia', 'EUA'];
paises.forEach(function(item){
    console.log("Olá "+item);

});


