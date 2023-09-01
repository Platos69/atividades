//Par e impar com validacao

let numeroReceber = parseInt(prompt('Digite um número: '))

if (Number.isInteger(numeroReceber)) {
  if (numeroReceber % 2 == 0) {
    alert(`${numeroReceber} é par`)
  } else {
    alert(`${numeroReceber} é impar`)
  }
} else if (isNaN(numeroReceber)) {
  alert('Apenas números inteiros')
}
