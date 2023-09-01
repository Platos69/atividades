//Valor de um produto em função

function PromocaoProduto(Valor_Produto){
    const Promocao = (Valor_Produto * 2.5).toFixed(2)
    Valor_Produto = (Valor_Produto).toFixed(2)// o operador => é usado para isso => a isso
    return (`custa R$${Valor_Produto}, porém na compra de 3 do mesmo produto um dos produtos sai com a metade do preço, o que fica R$${Promocao}.`)
}

function NomeEValorProduto(){
    const Descricao_Produto = prompt('Informe a descrição do produto: ')
    let Valor_Produto = parseFloat(prompt('Informe o valor do produto: '))

    if(isNaN(Valor_Produto) || Valor_Produto <= 0) {
        alert('O valor usado é inválido.')
        } else {
            const Valor_Promocao = PromocaoProduto(Valor_Produto)
            const Mensagem = (`O produto ${Descricao_Produto}, ${Valor_Promocao}`)
            document.write(Mensagem)
    }
}

NomeEValorProduto()
