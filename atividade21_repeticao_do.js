do {
  let numero = Number(prompt("Digite um número"))

  if (isNaN(numero) || numero === 0) {
    let sair = confirm("Confirma a saida?")
    if (sair == true) {
      alert("Operação cancelada!!!")
      break
    } else {
      continue
    }
  } else {
  }
  if (numero % 2 === 0 && numero !== 0) {
    let numeroF = numero * 2
    if (confirm(`O Valor ${numero} foi duplicado para ${numeroF}`)) {
      valor = `${numero} foi dubplicado para ${numeroF} <br>`
      document.write(valor)
      continue
    } else {
      break
    }
  } else if (numero % 2 !== 0) {
    let numeroF = numero * 3
    if (confirm(`O Valor ${numero} foi triplicado para ${numeroF}`)) {
      valor = `${numero} foi triplicado para ${numeroF} <br>`
      document.write(valor)
      continue
    } else {
      break
    }
  }
} while (numero !== 0)
