const numeroReceber = parseInt(prompt("Digite o valor do número: "))
let fatorial = 1

for (contador = 1; contador <= numeroReceber; contador++) {
  fatorial *= contador
  console.log(`${contador}! = ${fatorial}`)
}
