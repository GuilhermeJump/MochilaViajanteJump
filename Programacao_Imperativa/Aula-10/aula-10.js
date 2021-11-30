let nome = " Guilherme Carvalho";

console.log (nome.length); //retorna a quantidade

console.log ( nome.trim() ); //retira os espaços vazios
let nome2 = nome.trim();
console.log(nome2.split(" ")); //quebra a string

//arrays
let nomes = ["Guilherme", "Patrick", "Douglas", "Avatar" ];
nomes.push("Amanda","Talitão","Rodrigo");
console.log(nomes);

let novos = nomes.pop()
console.log(nomes);
console.log(novos);

let primeiroValor = nomes.shift();
console.log(nomes);
console.log(primeiroValor);

nomes.unshift(novos);
console.log(nomes);

let srtNomes = nomes.join(" - ");
console.log(srtNomes);

let Pesquisar = nomes.lastIndexOf("Douglas");
console.log(Pesquisar);

let FalsoVerdadeiro = nomes.includes("Avatar");
console.log (FalsoVerdadeiro);

nomes [1] = "Patrick Grynhas";
console.log (nomes);