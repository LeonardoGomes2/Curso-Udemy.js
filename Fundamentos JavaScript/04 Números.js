/*
Numeber com o N maiusculo ele é definico como função ja o number com o n minusculo é definido como um dado no código.
*/

const peso1 = 1.0;
const peso2 = Number ("2.0"); //outra maneira de definir um numero para a variavel.

console.log(peso1 , peso2);
console.log(Number.isInteger(peso1)); // Aqui temos a função Number que neste caso informa se o lavor de peso1 é inteiro ou nao por fardadeiro ou falso (True or False)
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.543;
const avalicao2 = 8.987;

const total = avaliacao1 * peso1 + avalicao2 * peso2;
const media = total/(peso1 + peso2);

console.log(media.toFixed(2));//aqui fixamos a media em até duas casas decimais após o ponto flutuante.
console.log(media.toString(2));//aqui definimos a media como string pelo .tostring caso queira passar para o valor binario definimos 2 ficando da seguinte forma console.log(media.toString(2));
console.log(typeof media);
console.log(typeof Number);//Função Number 


