let gabarito = [], resposta = [], alunos, alunosSala, totalAprovado = 0, per

for (let i = 0; i < 10  ; i++) {
  gabarito[i] = prompt(`Digite o gabarito da questão ${i + 1}`)
}
document.write(`Gabarito da prova: <br> ${gabarito}<br>`)

alunosSala = Number(prompt('Digite a quantia de alunos na sala: '))

for (let i = 0; i < alunosSala; i++) {
  let pontos = 0
  num = Number(prompt('Digite o número do aluno: '))

  for (let j = 0; j < 10; j++) {
    resposta[j] = prompt(`Digite a resposta da questão ${j + 1}: `)
    if (gabarito[j] === resposta[j]) {
      pontos++
    }
  }

  if (pontos >= 6) {
    totalAprovado++
  }

  document.write(`A nota do aluno ${num} foi de ${pontos.toFixed(0)}<br>`)
}

per = (totalAprovado * 100) / alunosSala

document.write(`Media de aprovação ${per}%<br>`)

