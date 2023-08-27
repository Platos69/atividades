//numero perfeito

const numeroReceber = parseInt(prompt("Digite o valor do número: "))
let divisores = 0

for (let i = 1; i < numeroReceber; i++) {
  if (numeroReceber % i === 0) {
    divisores += i
  }
}

if (divisores === numeroReceber) {
  confirm(`o ${numeroReceber} é um numero perfeito`)
} else {
  confirm(`o ${numeroReceber} não é um numero perfeito`)
}
