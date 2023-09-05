let idadeReceber,
  idadeBanco = [],
  i = 0,
  idadeMaior = 0

do {
  idadeReceber = parseInt(prompt('Digite a idade: '))
  idadeBanco.push(idadeReceber)

  if (idadeReceber > idadeMaior) {
    idadeMaior = idadeBanco[i]
  }
  i++
} while (idadeReceber !== 0 || isNaN(idadeReceber))

idadeBanco.pop()

console.log(`A maior idade é de ${idadeMaior} anos`)
 