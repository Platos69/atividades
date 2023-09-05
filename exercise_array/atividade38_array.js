let sequenciaReceber = [],
  i = 0

do {
  sequenciaReceber[i] = parseInt(prompt('Digite o valor: '))
  i++
} while (i < 10)

debugger
for (let i = 0; i <= sequenciaReceber.length; i++) {
  for (let c = 0; c <= sequenciaReceber.length; c++) {
    if (sequenciaReceber[i] > sequenciaReceber[c]) {
      let novoContador = sequenciaReceber[i]
      sequenciaReceber[i] = sequenciaReceber[c]
      sequenciaReceber[c] = novoContador
    }
  }
}

console.log(`${sequenciaReceber}`)
