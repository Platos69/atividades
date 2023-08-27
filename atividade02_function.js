//Pagamento refente ao modelo de um carro em função

function TaxaInicialEParcela(Preco_Carro,) {
    const Taxa_Inicial = (Preco_Carro / 2).toFixed(2)
    const Parcela = (Preco_Carro / 12).toFixed(2)
    return (`a taxa inicial igual à ${Taxa_Inicial}R$, já o valor de cada parcela é igual à ${Parcela}R$.`)
}
function ModeloCarroEPrecoCarro() {
  const Modelo_Carro = prompt('Digite o modelo do seu carro: ')
  const Preco_Carro = parseFloat(prompt('Digite o valor do seu carro: '))
  
if (isNaN(Preco_Carro) || Preco_Carro <= 0) {
      alert('Por favor, digite um valor válido.')
    } else {
      const Pagamento_Carro = TaxaInicialEParcela(Preco_Carro)
      const Mensagem = (`O seu carro modelo ${Modelo_Carro}, tem ${Pagamento_Carro}`)
      document.write(Mensagem)
    }
}
  
ModeloCarroEPrecoCarro()
  