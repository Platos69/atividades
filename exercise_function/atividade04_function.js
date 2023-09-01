//Descricao de medicmaento e definição do valor do medicamento em função

function PrecoMedicamento(Valor_Medicamento) {
    const Promocao_Medicamento = (parseInt(Valor_Medicamento) + Valor_Medicamento).toFixed(2)
    Valor_Medicamento = (Valor_Medicamento).toFixed(2)
    return (`${Valor_Medicamento}, porém na compra de 2 medicamentos do mesmo temos uma promoção de ${Promocao_Medicamento}.`)
}
function DescricaoMedicamentoEValorMedicamento() {
    const Descricao_Medicamento = prompt('Informe a descrição do documento: ')
    let Valor_Medicamento = parseFloat(prompt('Informe o valor do medicamento: '))
  
if (isNaN(Valor_Medicamento) || Valor_Medicamento <= 0) {
      alert('Por favor, digite um valor válido.')
    } else {
      const Preco_Promocao_Medicamento = PrecoMedicamento(Valor_Medicamento)
      const Mensagem = (`O ${Descricao_Medicamento}, tem o preço de ${Preco_Promocao_Medicamento}`)
      document.write(Mensagem)
    }
}
  
DescricaoMedicamentoEValorMedicamento()
  