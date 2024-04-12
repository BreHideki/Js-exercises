/* 
Dada uma lista de pacientes, descubra o IMC de cada paciente e 
imprima

"Paciente X possui o IMC de : Y"

Onde X é o nome do paciente e Y é o IMC desse paciente
Crie uma função para fazer o cálculo de IMC

peso / (altura * altura)
*/

const list = [
    {
        name: "breno",
        age: 23,
        weight: 92,
        height: 185
    },
    {
        name: "joao",
        age: 20,
        weight: 55,
        height: 190
    },
    {
        name: "Luiz",
        age: 31,
        weight: 85,
        height: 180
    }
]


function calculateImc(patient) {
    let imc = (patient.weight / ((patient.height / 100) ** 2)).toFixed(2);
    return `Paciente ${patient.name} possui o IMC de : ${imc}`
}

let p1 = calculateImc(list[0])
let p2 = calculateImc(list[1])
let p3 = calculateImc(list[2])

console.log(p1, p2, p3)



/*function calculateImc(name, weight, height) {
    let imc = (weight / ((height / 100) ** 2)).toFixed(2);
    return `Paciente ${name} possui o IMC de : ${imc}`
}

let awnser = calculateImc(list[0].name, list[0].weight, list[0].height)
console.log(awnser)
*/