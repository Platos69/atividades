let sequenciaPrimaria = [],
  sequenciaSecundaria = [],
  sequenciaReceber,
  sequenciaIntercalada = [],
  i = 0

do {
  sequenciaReceber = parseFloat(prompt('Digite o valor da primeira sequência: '))
  sequenciaPrimaria.push(sequenciaReceber)
} while (sequenciaPrimaria.length != 2)
{
  do {
    sequenciaReceber = parseFloat(prompt('Digite o valor da segunda sequência: '))
    sequenciaSecundaria.push(sequenciaReceber)
  } while (sequenciaSecundaria.length != 3)
}

console.log(`Primeira sequência: ${sequenciaPrimaria}\nSegunda sequência: ${sequenciaSecundaria}`)

do {
  sequenciaIntercalada.push(sequenciaPrimaria[i])
  sequenciaIntercalada.push(sequenciaSecundaria[i])
  i++ 
} while (i < Math.floor((sequenciaPrimaria.length + sequenciaSecundaria.length) / 2))

console.log(`Sequência intercalada: ${sequenciaIntercalada}`)
