//primo ou não primo

let numeroReceber,
  divisoresVerificar = 0

do {
  numeroReceber = Number(prompt("Digite o número: "))
  if (numeroReceber <= 0 || isNaN(numeroReceber)) {
    alert("Digite um valor válido.")
  }
} while (numeroReceber === 0 || isNaN(numeroReceber))

for (let contador = 0; contador <= numeroReceber; contador++) {
  if (numeroReceber % contador === 0) {
    divisoresVerificar++
  }
}

if (divisoresVerificar === 2) {
  alert("Esse número é primo")
} else {
  alert("Esse número não é primo")
}
