//soma, media e maiores idades
let idadeMaior = 18,
  sequenciaIdades = '',
  somaIdades = 0 

for (let i = 1; i <= 10; i++) {
  let idadeReceber = parseInt(prompt('Digite a idade: '))

  while (isNaN(idadeReceber) || !Number.isInteger(idadeReceber) || idadeReceber < 1) {
    alert('Error!')
    location.reload()
  }

  if (idadeReceber >= 18) {
    sequenciaIdades += `${idadeReceber},`
  }

  somaIdades += idadeReceber
}

sequenciaIdades = sequenciaIdades.slice(0, -1)

console.log(
  `a sequencia das idades maiores de 18 anos é: ${sequenciaIdades}\nA soma das idades: ${somaIdades}\nA média é igual á: ${Math.floor(
    somaIdades / 10,
  )}`,
)
