/*
Definimos a variavel por ver ou let no código.
Logo após definirmos o indentificador da variavel (lembrando sempre de definir identificadores claros e objetivos para a variavel.)
*/

//calculando desconto como exemplo de identifacadores da variaveis utilizando let.
let nome = "Caderno"; //String -> sequencia de caracteres (texto)
let categora = "Papelaria"; // String 
let preco = 19.90;
let desconto = 0.4;

console.log(preco * (1 - desconto));
// exemplo a baixo de boa pratica de programação no identificador com letra maiuscula para cada nova palavra no indentificador.

let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

// Exemplo de concatenação com variaveis.
console.log(
    "Produto: " + nome +  // o simbulo de + é usado para concatenar
    "\n Categoria: " + categora +
    "\n Preço sem desconto: " + preco +
    "\n Preço com desconto: " + precoComDesconto);