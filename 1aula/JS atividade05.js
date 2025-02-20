/***************************************************** 
                Lista de Exercícios 05
*****************************************************/
// 1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa e retorne sua idade.

function idade(anoAtual, anoNacimento){
    return anoAtual - anoNacimento;
    }
    console.log("A pessoa tem",idade(2025, 2008), "anos.");    
// 2.Crie uma função que receba a quantidade de combustivel de um carro e retorne quantos Kms ele pode viajar com esse combustivel.Considere o veículo faz uma média de 12 Kmsne quan/L.

const combustivel = (litros) => {
    return litros * 12;
};
var car1 = 20
var car2 = 8 
var car3 = 2
console.log("Carro 1: ",car1, "->",combustivel(car1),"Kms.")
console.log("Carro 1: ",car2, "->",combustivel(car2),"Kms.")
console.log("Carro 1: ",car3, "->",combustivel(car3),"Kms.")