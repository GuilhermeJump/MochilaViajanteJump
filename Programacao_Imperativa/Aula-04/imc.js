let nome;
let sobrenome;
let idade;
let peso;
let altura;
let plano;
let imc;

const nomeCompleto = nome + sobrenome;

nome = "José";
sobrenome = "da Silva";
idade = 27;
peso = 83.5;
altura = 1.83;
plano = "Ouro";
imc = peso / (altura * altura);

console.log(nome, sobrenome, "tem",idade, "anos ", "e seu índice de massa corporal é de" ,imc);