let receberNumero = parseInt(prompt('Digite o valor: '))
let expressao = ''

debugger
for (let i = 1; i <= receberNumero; i++) {
  if (i % 2 == 0) {
    expressao += `${i}\t`
  }
}

expressao = expressao.slice(0, -1)

console.log(`${expressao}`)
