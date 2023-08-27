let contaQuantiaContar = 0
let valorContas = 0

confirm("Este programa mostra o valor e a descrição da conta!")
do {
  let contaValor = Number(prompt("Digite o valor da conta: "))
  valorContas = valorContas + contaValor

  if (isNaN(contaValor) || contaValor === "P") {
    let sair = confirm("Confirma a saida?")
    if (sair == true) {
      confirm("Operação cancelada!!!")
      break
    } else {
      continue
    }
  } else {
    let contaDescricao = prompt("Digite a descrição da conta: ")
    contaQuantiaContar++
    document.write(
      `A conta ${contaQuantiaContar} de ${contaDescricao} é de R$${contaValor.toFixed(
        2
      )}<br>`
    )
    continue
  }
} while (true)
document.write(`<hr> Valor final: R$${valorContas}`)
