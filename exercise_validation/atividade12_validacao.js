//Raiz com validacao

let numeroReceber = Number(prompt('Digite um número: '))
let numeroRaiz = Math.sqrt(numeroReceber)

if (numeroReceber === 0 || numeroReceber < 1 || isNaN(numeroReceber)) {
  alert(`Não foi possivel calcular a raíz`)
} else {
  if (Number.isInteger(numeroRaiz)) {
    alert(`A raiz de ${numeroReceber} é igual à ${numeroRaiz}`)
  } else {
    alert(
      `A raiz de ${numeroReceber} é igual à ${numeroRaiz.toFixed(2)}, porém não é exata`
    )
  }
}
