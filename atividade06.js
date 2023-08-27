//Valor de um produto

let nome_produto, valor_produto, promocao

nome_produto = prompt('Informe o nome do produto: ')
valor_produto = parseFloat(prompt('Informe valor do produto: '))

promocao = ((valor_produto / 2) + (valor_produto * 2)).toFixed(2)//é equivalente a valor_produto / 2.5 ( pois um dos 3 produtos vale 3)
valor_produto = (valor_produto).toFixed(2)

console.log(`O preço do produto é ${valor_produto}R$, porém na compra de 3 itens é igual a ${promocao}R$`)