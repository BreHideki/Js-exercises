/* capturar 2 numeros
e fazer as operações matemáticas de 
soma, subtração, multiplicação, 
divisão e resto da divisão
*/

let number1 = prompt("Digite um número para fazer as operações: ");
let number2 = prompt("Digite mais um número para fazer as operações: ");
number1 = Number(number1);
number2 = Number(number2);
const  sumResult = number1 + number2;
const  subResult = number1 - number2;
const  multResult = number1 * number2;
const  divResult = number1 / number2;
const  restResult = number1 % number2;
const  results = `O resultado da soma é: ${sumResult}, o resultado da subtração é: ${subResult}, o resultado da multiplicação é: ${multResult}, o resultado da divisão é: ${divResult}, o resultado do resto da divisão é: ${restResult}`;
alert(results);