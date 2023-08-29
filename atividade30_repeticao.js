//numero aleatorio e adivinhação

const aleatorioReceber = parseInt(prompt('de 1 até: '))
let tentativas = 0,
  pergunta
const numeroRandomico = Math.floor(Math.random() * aleatorioReceber) + 1

debugger
do {
  pergunta = parseInt(prompt('Digite o valor que caiu: '))
  tentativas++
} while (pergunta !== numeroRandomico)

confirm(`Você acertou o número (${numeroRandomico}) em ${tentativas} tentativa`)
