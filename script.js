
const studentsList = [
    {
        name: "John Doe",
        firstGrade: 9,
        secondGrade: 10
    },
    {
        name: "Jane Smith",
        firstGrade: 8,
        secondGrade: 7
    },
    {
        name: "Tom Brown",
        firstGrade: 6,
        secondGrade: 4
    }
]
let average;
let isApproved;

function averageCalculator(n1, n2) {
  average = (n1 + n2) / 2;
  isApproved = average >= 7 ? " Parabéns, você foi aprovado!" : " Continue estudando para recurar a nota"
  return average + isApproved;
}


for(student of studentsList) {
    alert(`${student.name} sua média é ${averageCalculator(student.firstGrade, student.secondGrade)}`)
}