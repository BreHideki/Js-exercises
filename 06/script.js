/* 
**Jogo da advinhação**
Apresente a mensagem ao usuario:
"Advinhe o número que estou pensando? Está entre 0 e 10"

Crie uma lógica para gerar um número aleatório e
verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema

Enquanto o usuário não advinhar o número, mostrar a mensagem:
"Erro, tente novamente:"

Caso o usuário acerte o numero, apresentar a mensage:
"Parabéns! Você advinhou o número em x tentativas"

Substitua o "x" da mensagem, pelo número de tentativas
*/

let guessNumber = prompt("Advinhe o número que estou pensando? Está entre 0 e 10");

const randomNumber = Math.round(Math.random() * 10) + 1;

console.log(randomNumber);
let x = 1;

while(Number(guessNumber) != randomNumber) {
    guessNumber = prompt("Erro, tente novamente:");

    x++;
}

const message = x == 1 ? alert(`Parabéns! Você advinhou o número em ${x} tentativa`) : alert(`Parabéns! Você advinhou o número em ${x} tentativas`);
