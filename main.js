// 1
console.log("Hello World!");

// 2
let numberOne = Number(prompt("Digite o primeiro número:"));
let numberTwo = Number(prompt("Digite o segundo número:"));
const sum = numberOne + numberTwo;

console.log(`O resutado da soma dos 2 números informados é: ${sum}`)

// 3
let number = 1;

if(typeof number === "number"){
  console.log('É um número');
} else{
  console.log("Não é um número");
}

// 4
let string = 'Oi';

if(typeof string === "string"){
  console.log('É uma string');
} else{
  console.log("Não é uma string");
}

// 5
let boolean = true;

if(typeof boolean === "string"){
  console.log('É um booleano');
} else{
  console.log("Não é um booleano");
}

// 6
const sub = numberOne - numberTwo;
console.log(`O resultado da subtração dos 2 números informados é: ${sub}`);

// 7
const mul = numberOne * numberTwo;
console.log(`O resultado da multiplicação dos 2 números informados é: ${mul}`);

// 8
const div = numberOne / numberTwo;
console.log(`O resultado da divisão dos 2 números informados é: ${div}`);

// 9
const evenOdd = sum % 2

if(evenOdd === 0){
  console.log('É um número par');
}else{
  console.log('Não é um número par');
}

// 10
if(evenOdd !== 0){
  console.log('É um número impar');
}else{
  console.log('Não é um número impar');
}