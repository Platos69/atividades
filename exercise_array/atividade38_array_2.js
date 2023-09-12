let sequenciaReceber = [],
i = 0


debugger
do {
  sequenciaReceber[i] = parseInt(prompt('Digite o valor: '))
  i++
} while (i < 3)

console.log(`${sequenciaReceber.sort((a,b) => b - a)}`)
