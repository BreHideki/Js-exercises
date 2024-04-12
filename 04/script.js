/* 
Solicitar o nome do aluno e as 3  notas do bimestre

calcular a media daquele aluno.

Se o aluno passou no bimestre, dar os parabens.

Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

Em ambos os casos,  mostre  uma mensagem com o nome do aluno e a nota
*/

let studentName = prompt("Qual seu nome?");
let firstGrade = prompt("Digite a primeira nota:");
let secondGrade = prompt("Digite a segunda nota:");
let thirdGrade = prompt("Digite a terceira nota:");

firstGrade = Number(firstGrade);
secondGrade = Number(secondGrade)
thirdGrade = Number(thirdGrade)

let average  = (firstGrade + secondGrade + thirdGrade) / 3;
average = average.toFixed(1);

alert(`Sua média é: ${average}`)

const passedTheYear = average >= 6 ? alert(`Parabéns ${studentName}, você passou no bimestre!`) : alert(`${studentName} continue estudando para passar na prova de recuperação, você vai conseguir!`);












