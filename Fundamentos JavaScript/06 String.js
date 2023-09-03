const escola = "Cod3r";

console.log(escola.charAt(4)); //.charAt me retorna a letra que esta na posição 4 lembrando que a contagem se inicia com a primeira letra sendo 0.

/*console.log(escola.charAt(5)); 
Neste caso ira retornar vazio pois nao ira achar a posição na string Coder por passar a quantidade de caracteres. */

console.log(escola.charCodeAt(3)); //.charCodeAt retorna o valor da String na tabela Unicode.
console.log(escola.indexOf ("3")); //.indexOf retorna o indice ascociado ao numero 3 dentro da palavra.Caso a substring nao for encontrada retorna-se o valor -1

console.log(escola.substring(1));//Vai apartir do indice 1 imprimir ou seja ira mostrar od3r.
console.log(escola.substring(0,3));// Neste caso ira incluir o indice 0 porem nao inclui o indice 3 imprimindo a palavra Cod.

console.log("Escola ".concat(escola).concat(" ! "));//.concat utilizamos para concatenar.Diferente do numero que nao podemos chamar direto na string podemos fazer isso no exemplo temos escola direto no código.

console.log(escola.replace(3,"e"));//O .replace ira substituir o 3 pela letra definida no caso letra e.

console.log("Ana, Maria, Pedro".split(","));//.split quebra a string em arrei.
