let par = [2,4,6,8,10];

let par2= par.map((item) => item +1 );

console.log(par2);


let nomes = [ 'Maria', 'João', 'Maria', 'Linel'];

nomesFiltro = nomes.filter ((item) => (item == 'Maria'));
console.log(nomesFiltro);

let numeros2 = [1,2,3,4,5,6];

numeros2Redux = numeros2.reduce(function(acumulador, item){
    return acumulador + ' - ' + item
});

console.log(numeros2Redux);

let animais = ['Capivara', 'Burro', 'Jumento', 'Asno', 'Mula'];

animais.forEach(function(item){
    console.log("O nome do animal é " +item);

});
