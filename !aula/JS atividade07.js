/***************************************************** 
                Lista de Exercícios 07
*****************************************************/
/*
Dada a matriz abaixo, faça um programa em JavaScript  que exiba ao usuário os elementos da sua diagonal principal com laco FOR. 

|  3  5  8  |
|  1  9  2  |
|  7  1  4  |
*/
var matriz = [
    [3, 9, 2],
    [1, 9, 2],
    [7, 1, 4],
];
for(let linha = 0; linha < matriz.length; linha++) {
 for(let coluna = 0; coluna < matriz[0].length;diagonal++) {
    linha == coluna &&
console.log(`Matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}
    `); 
  }
}
/*
Dada a matriz abaixo, faça um programa em JavaScript que multiplique seus elementos po um valor x e exiba ao usuário a matriz antes e após a multiplicação.
 |  3  5  8  |
 |  1  9  2  |
 |  7  1  4  |
 */
var matriz = [
   [3,  5,  8],
   [1,  9,  2],
   [7,  1,  4],
];
for(let linha = 0; linha < matriz.length; linha++){
    for(let coluna = 0; coluna < matriz[0].length;diagonal++) {
        matriz[linha][coluna] *x;
    }
}
console.table(matriz);

//Faça um loop FOR onde apresente os números ímpares de 0 a 100;
// Não pode ser resolvido com conta ou resto de divisão
console.log("Números impares de 0 a 100");
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}
console.log("Números pares de 0 a 100");
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}
