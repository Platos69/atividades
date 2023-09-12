//Bairro com condicional por nome

/* OBS: no caso se utilize string no case deve ser feito assim:
case 'Sexo' || 'sexo:

*/

const produtoValor = parseFloat(prompt('Informe o valor do produto: '))

let escolhaBairro = prompt('Antares\nBarro Duro\nBebedouro\nBenedito Bentes\nCentro\nClima Bom\nPajuçara\nPonta Verde\nJatiúca\nDigite a opção desejada: ')

escolhaBairro = escolhaBairro.toUpperCase()
escolhaBairro = escolhaBairro.replace(' ', '-')

switch(escolhaBairro){
    case 'ANTARES':
        entregaValor = produtoValor + 7
        alert(`Valor do seu produto é igual à R$${produtoValor.toFixed(2)} mais a entrega de R$ 7,00 é igual á R$${entregaValor.toFixed(2)} `)
        break
    case 'BARRO-DURO':
        entregaValor = produtoValor + 5
        alert(`Valor do seu produto é igual à R$${produtoValor.toFixed(2)} mais a entrega de R$ 5,00 é igual á R$${entregaValor.toFixed(2)} `)
        break
    case 'BEBEDOURO':
        entregaValor = produtoValor + 8
        alert(`Valor do seu produto é igual à R$${produtoValor.toFixed(2)} mais a entrega de R$ 8,00 é igual á R$${entregaValor.toFixed(2)} `)
        break
    case 'BENEDITO-BENTES':
        entregaValor = produtoValor + 6
        alert(`Valor do seu produto é igual à R$${produtoValor.toFixed(2)} mais a entrega de R$ 6,00 é igual á R$${entregaValor.toFixed(2)} `)
        break
    case 'CENTRO':
        entregaValor = produtoValor + 10
        alert(`Valor do seu produto é igual à R$${produtoValor.toFixed(2)} mais a entrega de R$ 10,00 é igual á R$${entregaValor.toFixed(2)} `)
        break
    case 'CLIMA-BOM':
        entregaValor = produtoValor + 4
        alert(`Valor do seu produto é igual à R$${produtoValor.toFixed(2)} mais a entrega de R$ 4,00 é igual á R$${entregaValor.toFixed(2)} `)
        break
    case 'PAJUCARA':
        case 'PONTA-VERDE':
            case 'JATIUCA':
                entregaValor = produtoValor + 15
                alert(`Valor do seu produto é igual à R$${produtoValor.toFixed(2)} mais a entrega de R$ 15,00 é igual á R$${entregaValor.toFixed(2)} `)
                break
}