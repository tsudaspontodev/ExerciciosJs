// const prompt = require ('prompt-sync')() ;

// const nome1 = prompt("Digite ");
//1
let nome = "Marcos";
let idade = 40;
let cidade = "Maringá";

console.log(`Sou ${nome}, tenho ${idade} anos e moro em ${cidade}`);

let carro = "Fusca";

//2
let largura = 1.92;
let comprimento = 3.4;
let area = (largura * comprimento);
console.log(`A area total do terreno das seguintes medidas de largura ${largura} e comprimento ${comprimento} é de ${area}` );

//3
 let tempC = 29.5;
 let tempF = tempC * 1.8 + 32;
 console.log(`Temperatura em Fahrenheit ${tempF}`);
 let kelvin = tempC + 273.15
 console.log(kelvin)
const km = 98
 const milha = km * 0.621371;
 console.log(milha.toFixed(2))
 
 //4
 let saldoinicial = 300.56;
 let deposito = 1.99;
 let saque = 3.5;
 let tarifa = 9.99;
 let saldo;
 let saldonovo = (saldo + deposito);
 saldo = saldonovo;
 saldonovo = saldonovo - saque - tarifa;


 console.log (`Saldo atual ${saldoinicial}`);
 console.log (`Saldo atual ${saldo} realizado deposito de ${deposito} saldo atual ${saldonovo}`);
 console.log (`Saldo atual ${saldo} realizado saque de ${saque}  e tarifa do saque ${tarifa}saldo atual ${saldonovo}`)

 
 //5
 let preco = 300.56;
 let descontoPorcent = 0.1
 let precocomdesc;
 precocomdesc = (preco * descontoPorcent);
 let preco1 = preco - precocomdesc;

 console.log (`O valor do produto é de ${preco} é o valor do desconto é de ${descontoPorcent} valor com desconto ${preco1}`);

//6
//  let num = 100;
 
//  for ( let i = 0; i <= 100; i = -2 );
// console.log (i);

//7
let nota1 = 4.25;
let nota2 = 9.75;
let nota3 = 8.45;

let media = (nota1 + nota2 + nota3)/3;

console.log (`A média das seguintes notas ${nota1}, ${nota2}, ${nota3} média ${media}`);

if (media >= 7)
{
    console.log("Aprovado")
}
else if (media >= 5 && media <7)
{
    console.log("Recuperação");
}
else 
{
    console.log("Reprovado")
}

//8

let renda = 3580;

if (renda < 2000)
{
    console.log("Isento");
}
else if (renda > 2000 && renda < 5000)
{
    console.log("5%");
}
else if (renda > 5000 && renda < 10000)
{
    console.log("10%");
}
else 
{
    console.log("acima de 10.000 é cobrado 15%")
}