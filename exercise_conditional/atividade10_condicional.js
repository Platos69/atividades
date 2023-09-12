//Bairro com condicional

/* OBS: no caso se utilize string no case deve ser feito assim:
case 'Sexo' || 'sexo:

*/

const produtoValor = parseFloat(prompt('Informe o valor do produto: '))

let escolhaBairro = 0

do{
escolhaBairro = Number.parseInt(prompt('Antares - R$7,00 \n2 - Barro Duro\n3 - Bebedouro -\n4 - Benedito Bentes\n5 - Centro\n6 - Clima Bom\n7 - Pajuçara, Ponta Verde, Jatiúca\nDigite a opção desejada: '))
}while(escolhaBairro > 7 || escolhaBairro < 1)

let entregaValor = 0

switch(escolhaBairro){
    case 1:
        entregaValor = produtoValor + 7
        alert(`Valor do seu produto é igual à R$${produtoValor.toFixed(2)} mais a entrega de R$ 7,00 é igual á R$${entregaValor.toFixed(2)} `)
        break
    case 2:
        entregaValor = produtoValor + 5
        alert(`Valor do seu produto é igual à R$${produtoValor.toFixed(2)} mais a entrega de R$ 5,00 é igual á R$${entregaValor.toFixed(2)} `)
        break
    case 3:
        entregaValor = produtoValor + 8
        alert(`Valor do seu produto é igual à R$${produtoValor.toFixed(2)} mais a entrega de R$ 8,00 é igual á R$${entregaValor.toFixed(2)} `)
        break
    case 4:
        entregaValor = produtoValor + 6
        alert(`Valor do seu produto é igual à R$${produtoValor.toFixed(2)} mais a entrega de R$ 6,00 é igual á R$${entregaValor.toFixed(2)} `)
        break
    case 5:
        entregaValor = produtoValor + 10
        alert(`Valor do seu produto é igual à R$${produtoValor.toFixed(2)} mais a entrega de R$ 10,00 é igual á R$${entregaValor.toFixed(2)} `)
        break
    case 6:
        entregaValor = produtoValor + 4
        alert(`Valor do seu produto é igual à R$${produtoValor.toFixed(2)} mais a entrega de R$ 4,00 é igual á R$${entregaValor.toFixed(2)} `)
        break
    case 7:
        entregaValor = produtoValor + 15
        alert(`Valor do seu produto é igual à R$${produtoValor.toFixed(2)} mais a entrega de R$ 15,00 é igual á R$${entregaValor.toFixed(2)} `)
        break
}