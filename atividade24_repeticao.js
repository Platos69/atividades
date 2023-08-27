//chinchilas

let chinchiliasNumero, numeroAnos, chinchiliasTotal

do {
  chinchiliasNumero = parseInt(prompt("Números de chinchilias: "))

  if (chinchiliasNumero < 2 || isNaN(chinchiliasNumero)) {
    alert("ERROR! Valor inválido.")
    location.reload()
  } else {
    numeroAnos = parseInt(prompt("Número de anos que deseja prever: "))

    if (numeroAnos < 1 || isNaN(numeroAnos)) {
      alert("ERROR! Valor inválido.")
      location.reload()
    } else {
      for (let i = 1; i <= numeroAnos; i++) {
        chinchiliasNumero = chinchiliasNumero * 3
        document.write(`Anos: ${i} - Chinchilas: ${chinchiliasNumero}<br>`)
      }
    }
  }
} while (
  chinchiliasNumero < 2 ||
  (isNaN(chinchiliasNumero) && numeroAnos < 1) ||
  isNaN(numeroAnos)
)
