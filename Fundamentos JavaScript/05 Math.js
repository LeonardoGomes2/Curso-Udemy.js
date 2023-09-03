/*
Math é um Api de javascript como nao temos um operador de exponensiação teremos que utilizar a classe Math no exemplo a baixo estaremos calculando o raio de uma circunferencia ja definindo o raio.

*/

const raio = 5.6;   
const area = Math.PI * Math.pow(raio , 2);//dentro dos parenteses definimos os parametros.

console.log(area);
console.log(area.toFixed(2));
console.log(typeof Math); //math é um objeto em javascript.