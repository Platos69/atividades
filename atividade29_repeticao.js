//Escreva um programa em JavaScript que use um loop 'while' para imprimir uma uma sequencia de fibonacci

receberNumero = parseInt(prompt('Digite até que número quer ver a sequência de fibonacci?: '))
let n1 = 0
let n2 = 1
let resultado
let expressao = ''

debugger
while (n1 <= receberNumero) {
  resultado = n1 + n2
  n1 = n2
  n2 = resultado
  expressao += `${n1}\t`
}

expressao = expressao.slice(0, -1)

console.log(`${expressao}`)
