// Criando variáveis com "var" (var nome_variavel = <valor>;)
var nome = "Tibúrcio";
console.log("Meu nome é", nome);
var idade = 23;
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos");
idade = idade + 1;
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos");
console.log("------------------------------------------------");

//JavaScript trabalha com sistema case sensitive (maiúscula são diferentes de minúsculas)
console.log("Criando uma variável Teste e tentando acessar como testE.");
let Teste = "Variável teste!";
// console.log(testE);
console.log(Teste);

//REGRAS PARA NOMEAR IDENTIFICADORES(VARIAVEIS)
//Podem  iniciar com 'A'-'Z', 'a'-'z', '_' ou 'S
let MinhaVariavel = 10;
let outraVariavel = 2.65;
const _minhaConstante = "Uma constante qualquer!";
var $minhaVariavel = 5;

//Variáveis lógicas (boolean)
var nome = "Julia";
var rico = false;
var eAluno = true;
console.log("Nome:",Julia,"| È aluno?", eAluno,"| È rico?", rico);
