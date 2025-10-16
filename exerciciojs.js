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

//9
const hora = 12

if (hora >= 5 && hora < 11 )
{
    console.log("Bom dia")
}
else if (hora >= 12 && hora < 17)
{
    console.log("Boa tarde")
}
else 
{
    console.log("Boa Noite")
}

//10

let idade1 = 15;
let autoriza = Boolean;
autoriza = true;

if (idade1 >= 18)
{
    console.log("Permitido a entrada")
}
else if (idade1 <= 18 && autoriza == true )
{
    console.log("Entrada permitida com autorização")
}
else
{
    console.log("Entrada proibida")
}

//11
 for (num1 = 0; num1 <= 50; num1+=3  )
 console.log(num1);

 //12
 let soma = 0;
 for (num2 = 0; num2 <= 100; num2+=2)
 
 console.log(soma += num2);
 
 //13
 for (num3 = 20; num3 >= 5; num3--)
 console.log(num3);

 //14
 let tabuada = 9;
 for (num4 = 0; num4 <= 10; num4++)
 console.log(`${num4} * ${tabuada} = ${num4 * tabuada}`)

 //15

 let a = 0;
 let b = 1;
 for (let i = 0; i <= 10; i++)
 {
    console.log(a);
    [a, b] = [b, a+b]
 }

//16

const nomes = ["Maria", "José", "João", "Izabel"];
console.log(nomes)
for (let i = 1; i < nomes.length; i++)
console.log(i, '-', nomes[i]);

//17
let numarray = [];
for (e = 0; e <= 100; e++)
console.log([e])