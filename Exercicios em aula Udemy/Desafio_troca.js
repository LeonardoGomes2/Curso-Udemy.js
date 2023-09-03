// desafio trocar o valor das variaveis de forma que a receba o valor de b e vise versa.

let a = 7;
let b = 94;
//let temp = a;
//temos que criar uma terceira variavel para que guardemos o valor de a, neste caso a variavel temporaria temp.

//a = b;
//quando atribuimos a troca a varival a ira receber o valor de b e guardalo por isso a nescessidade de uma terceira variavel que armazena o valor 7 de a.
//b = temp;
// aqui utilizamos a terceira variavel com o valor armazenadao de a para fazer a troca pelo valor de b pois se ela receber o código ( b = a ) como na linha acima o valor de a ja esta alterado para 94 iria mostrar o mesmo resultado nao havendo a troca.

/*
de maneira mais simples tbm podemos trocar o valor das variaveis utilizando os conchetes
[a,b] = [b,a]
neste caso eliminamos a nescesidade de uma terceira variavel.
*/
[a,b] = [b,a]; // exemplo sem a terceira varivael.
console.log(a); // quando executado o valor a valera 94.
console.log(b); // e o valor b valera 7.