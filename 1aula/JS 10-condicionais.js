// Condicional simples com IF
var anoNacimento = 2003;

if(anoNacimento>2003

){
    console.log("A pessoa nasceu deois de 2003.");
}

if(anoNacimento < 2003){
    console.log("A pessoa nasceu deois de 2003.");
}

if(anoNacimento == 2003){
    console.log("A pessoa nasceu em 2003.");
}

//Condições simples com IF-Else
var anoNacimento = 2005;
if(anoNacimento > 200){
    console.log("A pessoa nasceu depois de 2000.");
}else{
    console.log("A pessoa nasceu em 2000 ou antes");
}

// Condições compostas com IF
const login = "admin";
const senha = "12345";

var loginUser = "admin";
var senhaUser = "12345";

if(loginUser == login && senhaUser == senha){
    console.log("Acesso permitido!");
} else {
    console.log("Acesso negado!");
}

// Desvio condicional aninhado - IF-ELSE_IF-ESLE
var semaforo = "vermelho";

if(semaforo == "verde"){
console.log("Siga");
} else if (semaforo == "amarelo"){
    console.log("Atenção!");
} else {
    console.log("Pare!");
}

// Desvio condicional IF com bloco de comandos
var idade = 18

if (idade <=18){
    console.log("Entrei no if...");
    idade++;
    console.log("Incrementei a idade...");
    console.log("A nova idade é", idade);
    console.log("Agora estou saindo do bloco if");
}
console.log("Terminei");

// Criando variáveis locais com "let" (só existem dentro do bloco onde foram criadas)
var mes = "Agosto";
var dia = 15;

if(dia == 15 && mes == "Agosto"){
    let mensagem = "Hoje é dia 15 de Agosto";
    console.group(mensagem);
}
console.log("Tentando acessar a variável local fora do bloco, vai dar erro!");
// console.log(mensagem);

// Criando uma função condicinal IF
const desconto = (valorCompra) =>{
let desconto = 0
if (valorCompra >= 1000){
    desconto = valorCompra * 12 / 100;
}
return desconto;
};

var totalCompra = 950;
console.log("Valor total da Compra: R$",totalCompra,":::Desconto: R$",desconto(totalCompra));
totalCompra = 1800;
console.log("Valor tototal da Compra: R$",totalCompra,":::Desconto: R$",desconto(totalCompra));

// Desvio condicional If inline (ternário)
// condição ? expressão_se_verdadeiro : expressão_se_falso
var preco = 500; 
var resultado = preco <= 100 ? "Tá barato!": "Vish, ta muito caro!";
// O operador acima é o mesmo que escrever:
// if(preco <=100){
//  resultado = "Tá barato!"
// }else{
//  resultado = "Vish, ta muito caro!"
// }
console.log("Preço: R$", preco, "-", resultado);
//If ternário com somente uma expressão
// condição && expressão
var logado = true;
logado && console.log("Usuário está logado!")

//Desvio condicional - Switch Case
console.log("---------------Switch Case---------------");
switch (1) {
    case 1:
        console.log ("O usuário digitou o número 1!")
        break;

    default:
        console.log("O usuário informou um número diferente de 1!")
        break;
}
console.log("------------------------------");
//Menu de seleção
var menuSelecionado = "Home"

switch (menuSelecionado) {
    case "Contato":
        console.log("Você clicou no link 'Home'!");
        break;

case "Quem somos":
    console.log ("Você clicou no link 'Quem somos'");
        break;

case"Contato":
onsole.log ("Você clicou no link 'Quem somos'");
        break;

deafault:
  console.log("Opçao inválida de menu");
break;
}


//Varias opções com mesmo case - Switch Case
var mes = 11;

case 1:
case 2:
case 3:
        console.log("Primeiro trimeste!");
        
 
 case 4:
case 5:
case 6:
  console.log("Segundo trimeste!")
     

case 7:
 case 8:
case 9:
    console.log("Terceiro trimeste!")
     

case 10:
case 11:
case 12:
 console.log("Quarto trimeste!")
 break;

 deafault:
  console.log("Mês inválido!")
  break;

