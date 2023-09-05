let sequenciaReceber,
  sequenciaNegativo = [],
  sequenciaPositivo = [],
  i = 0

do {
  sequenciaReceber = parseInt(prompt(`Digite o número(${i} de 8): `))
  if (isNaN(sequenciaReceber)) {
    alert('ERROR! Apenas números, seu vagabundo!')
    continue
  } else {
    if (sequenciaReceber > 0) {
      sequenciaPositivo.push(sequenciaReceber)
    } else {
      sequenciaNegativo.push(sequenciaReceber)
    }
  }
  i++
} while (i != 8)

console.log(`Positivo: ${sequenciaPositivo}\nNegativo: ${sequenciaNegativo}`)
