/***************************************************** 
                Lista de Exercícios 
*****************************************************/
// 1. Crie um array de frutas com os seguintes elementos:Banana, Maçã, Pera, Uva, Morango.
// 2. Adicione Tangerina no final.
// 3. Adicione Goiaba no início.
// 4. Exiba o conteúdo do índice 5.
// 5. Exclua o elemnto uva.
// 6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);

frutas.push("Tangerina");
frutas.unshift("Goiaba");
console.table(frutas);

var posicao = frutas.indexOf("Uva");
console.log(frutas[5]);

var posição = frutas.indexOf (Uva)
frutas.slice(posicao, 1);
console.table(frutas);

var copia = frutas.splice(2, 5);
console.table(copia);





