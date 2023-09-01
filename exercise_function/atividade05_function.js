//Valor pelo tempo usado de um computador em função

function ValorPorMinutoETempoUsadoCliente(Valor_Tempo, Tempo_Cliente){
    const Tempo = 15
    const Valor_Por_Min = (Valor_Tempo / Tempo)
    const Valor_Cliente = (Valor_Por_Min * Tempo_Cliente).toFixed(2)
    const Hora = parseInt(Tempo_Cliente / 60)
    const Mins = parseInt(Tempo_Cliente % 60)
    const Segs = parseInt(Mins % 60)
    return (`usou o computador por ${Hora}Hr(s), ${Mins}Min(s) e ${Segs}Seg(s), por isso o valor que deverá ser pago é igual á ${Valor_Cliente}R$. `)
}

function ValorTempoETempoUsado(){
    const Valor_Tempo = parseFloat(prompt('Informe o valor de 15 minutos de uso: '))
    const Tempo_Cliente = parseInt(prompt('Informe o tempo que o computador foi usado (Em minutos): '))

if (isNaN(Valor_Tempo, Tempo_Cliente) || Valor_Tempo, Tempo_Cliente <= 0) {
        alert('Por favor, digite um valor válido.')
    } else {
        const Valor_A_Ser_Pago = ValorPorMinutoETempoUsadoCliente(Valor_Tempo, Tempo_Cliente)
        const Mensagem = (`O cliente ${Valor_A_Ser_Pago}`)
        document.write(Mensagem)
    }
}

ValorTempoETempoUsado()