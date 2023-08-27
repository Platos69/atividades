const numeroReceber = parseInt(prompt("Digite o valor do número: "))
let fatorial = 1
let expressao = ""

for (let contador = 1; contador <= numeroReceber; contador++) {
  fatorial *= contador
  expressao += `${contador}x`
}

// Removendo o último "x" extra no final da expressão
expressao = expressao.slice(0, -1)

console.log(`${expressao} = ${fatorial}`)
