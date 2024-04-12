let numberOne = Number(prompt("Insira o primeiro número"));

let numberTwo = Number(prompt("Insira o segundo número"));

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo

let even = sum % 2;


alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números: ${sub}`)
alert(`A multiplicação dos dois números: ${mult}`)
alert(`A divisão dos dois números: ${div}`)
alert(`O resto da divisão dos dois número: ${rest}`)

const isEven = even == 0 ? "Par" : "ímpar";
alert(isEven);

const same = numberOne == numberTwo ? "Você inseriu os mesmos números" : "Você inseriu números diferentes"
alert(same)
