let tenista = {

    nome: 'Roger',
    idade: 30,
    saudacao: function () {
        return 'Olá, me chamo Roger';
    }
};

// console.log(tenista.saudacao());

function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
};

let carroNovo = new Carro ( "Tesla", "x" );
let carroNovo1 = new Carro ( "Tesla", "3" );

console.log(carroNovo);
console.log(carroNovo1);


// let carro = {
//     marca: "ford",
//     modelo: "k"
// };

// console.log(carro.modelo);

