let nota1, nota2, nota3, nota4

do {
  nota1 = parseFloat(prompt("Digite a primeira nota (1 à 10): "))
} while (nota1 > 10 || nota1 < 1)

do {
  nota2 = parseFloat(prompt("Digite a segunda nota (1 à 10): "))
} while (nota2 > 10 || nota2 < 1)

do {
  nota3 = parseFloat(prompt("Digite a terceira nota (1 à 10): "))
} while (nota3 > 10 || nota3 < 1)

do {
  nota4 = parseFloat(prompt("Digite a quarta nota (1 à 10): "))
} while (nota4 > 10 || nota4 < 1)

const mediaAritimetica = (nota1 + nota2 + nota3 + nota4) / 4

if (mediaAritimetica >= 7) {
  alert(`Você passou com uma média de: ${mediaAritimetica.toFixed(2)}`)
} else if (mediaAritimetica < 7) {
  alert(`Você reprovou com uma média de: ${mediaAritimetica.toFixed(2)}`)
}
