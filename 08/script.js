/*
Crie uma lista de pacientes

Cada paciente dentro da lista, deverá conter
nome 
idade
peso altura

Escreva uma lista contendo o nome dos pacientes
*/

/*const list = [
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

let  patientsNameList = [];

for(let i = 0; i < list.length; i++) {
    patientsNameList[i] = list[i].name;
}

console.log(patientsNameList)
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

let patientsNames = []

for(let patient of list) {
    patient = patientsNames.push(`Nome: ${patient.name}, idade: ${patient.age}, peso: ${patient.weight}, altura: ${patient.height}`)
}

console.log(patientsNames);