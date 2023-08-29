//Escreva um programa em JavaScript que use um loop 'for' para imprimir uma contagem regressiva de 10 a 1.

receberNumero = parseInt(prompt('Digite o valor para a contagem regressiva: '))
let expressao = ''

for (let i = receberNumero; i >= 1; i--) {
  expressao += `${i}\t`
}

expressao = expressao.slice(0, -1)

console.log(`${expressao}`)
