//Valor à ser pago pelo kilo em função

function PrecoPorKiloEConsumidoPeloCliente(Valor_KG, Consumido_G) {
    const Preco_Por_Kilo = (Consumido_G * (Valor_KG / 1000)).toFixed(2)
    const Consumido_Cliente = (Consumido_G / 1000).toFixed(3)
    return (`consumiu ${Consumido_Cliente}KG(s), o que fica ${Preco_Por_Kilo}R$.`)
}
function ValorPorKiloEConsumidoEmGramas() {
    const Nome_Cliente = prompt('Informe o nome do cliente: ')
    const Valor_KG = parseFloat(prompt('Me diga o valor por Kg: '))
    const Consumido_G = parseFloat(prompt('Informe a quantidade consumida (Em gramas): '))
  
if (isNaN(Valor_KG, Consumido_G) || Valor_KG, Consumido_G <= 0) {
      alert('Por favor, digite um valor válido.')
    } else {
      const Pagamento_Kilo_E_Consumo_Cliente = PrecoPorKiloEConsumidoPeloCliente(Valor_KG, Consumido_G)
      const Mensagem = (`O cliente ${Nome_Cliente}, ${Pagamento_Kilo_E_Consumo_Cliente}`)
      document.write(Mensagem)
    }
}
  
ValorPorKiloEConsumidoEmGramas()
  