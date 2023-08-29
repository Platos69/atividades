//Escreva um programa em JavaScript que use um loop 'while' para imprimir uma contagem regressiva de 10 a 1.

receberNumero = parseInt(prompt('Digite o valor para a contagem regressiva: '))
let expressao = ''

while (receberNumero > 0) {
  expressao += `${receberNumero}\t`
  receberNumero -= 1
}

expressao = expressao.slice(0, -1)

console.log(`${expressao}`)
