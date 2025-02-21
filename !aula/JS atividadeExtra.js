/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ***********************************************************************
1. Par ou Ímpar?
Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.
📌 Dica: Use o operador % para verificar o resto da divisão.
------------------------------------------------------------------------
const imparpar = (num) =>{
return num % 2 == 0 ? "O número é par!": "O número é impar!";
}:
    console.log(imparpar(10));
    console.log(imparpar(3));
    console.log(imparpar(2));

2. Tabuada : Exiba no console a tabuada desse numero de 1 a 10
var tabuada = 1;
console.log(tabuada,"x 1 = ", tabuada*1);
console.log(tabuada,"x 2 = ", tabuada*2);
console.log(tabuada,"x 3 = ", tabuada*3);
console.log(tabuada,"x 4 = ", tabuada*4);
console.log(tabuada,"x 5 = ", tabuada*5);
console.log(tabuada,"x 6 = ", tabuada*6);
console.log(tabuada,"x 7 = ", tabuada*7);
console.log(tabuada,"x 8 = ", tabuada*8);
console.log(tabuada,"x 9 = ", tabuada*9);
console.log(tabuada,"x 10 = ", tabuada*10);

📌 Exemplo (se o número for 3):

------------------------------------------------------------------------


3. Fatorial de um Número
Solicite um número ao usuário e exiba no console o seu fatorial.
console.log("Fatorial de 5! =", 5 * 4 * 3 * 2 * 1);

📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
------------------------------------------------------------------------


4. Soma dos Números de um Array
Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.
let numeros = [10, 20, 30, 40]; numeros [0]+numeros[1]+...
// Saída: Soma = 100

var numeros = [10, 20, 30, 40];
var soma = numeros[0] + numeros[1] + numeros[2] + numeros[3];
console.log(soma);


5. Ordenação de Números
Peça ao usuário para inserir vários números separados por vírgula. Depois, exiba os números ordenados de forma crescente no console.

Entrada: 7, 1, 4, 9, 3
Saída: 1, 3, 4, 7, 9


const ordemNumero = [8, 3, 5, 1, 9];
console.log(ordemNumero);
console.log(ordemNumero.sort());
// -----------------------------------------------------------

/***************************************************** 
                Exercícios para fixação 
*****************************************************/ 
/* Estourando o cartão - versão while - utilizando o navegador
1. Crie uma variável e solicite ao usuário o seu nome;
2. Crie uma variável e solicite ao usuário o seu nome do banco; 
3. Crie uma variável e solicite ao usuário a sua agência; 
4. Crie uma variável e solicite ao usuário o número da conta; 
5. Crie uma variável e solicite ao usuário o saldo da conta; 
6. Exiba ao usuário os dados e o saldo da conta; 
7. Efetue e exiba ao usuário 5 movimentações na conta; 
8. Exiba ao usuário novamente os dados e o saldo da conta;
*/ 
var nome = prompt("Informe seu nome:")
var banco = prompt("Informe seu banco:")
var agencia = prompt("Informe sua agencia:")
var conta = prompt("Informe sua conta:")
var saldo = prompt("Informe seu saldo:")
//(`Olá ${Julia}! Seu banco ${brasil} numero de conta: ${19346}`) | sau saldo é ${1000}`);

var contador = 1;
while (contador <= 5) {
    let gasto = Math.random()*100; //Valor aleatório entre 0 e 99.999...
    saldo -= gasto;
    console.log(contador);
    contador++;
}
 //console.log(saldo.toFixed(2)); //Deixa o valor decimal somente com 2 casas

 console.log(
`Olá ${Julia}! Seu banco ${brasil} numero de conta: ${19346} | seu saldo é ${saldo.toFixed(2)}`
 );


// Jogo cara e coroa - melhor de três rodadas - aleatório - DO-While
// Apresentar um placar das rodadas ex:

console.log("----------------------------");
console.log("            Placar          ");
console.log("----------------------------");
console.log(`Vitórias: 'variavelVitoria`);
console.log(`Derrotas:  'variavelDerrotas`);
console.log("------------------------------")

var i = 1;
var cara = [0];
var coroa = [0];
var contador = [1];
derrotas = 0;
let fase = 2
for (let i = 0; i < numeros.length; i++){
    numeros[i] % 2 == 0 ? cara ++ : coroa++;
   }
   console.log


