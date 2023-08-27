//primo ou não primo

const numeroReceber = parseInt(prompt("Digite o valor do número: "))
let divisores = 0

for (let contador = 0; contador <= numeroReceber; contador++) {
  if (numeroReceber % contador === 0) {
    divisores++
  }
}

if (divisores === 2) {
  confirm(`o ${numeroReceber} é primo`)
} else {
  confirm(`o ${numeroReceber} não é primo`)
}
