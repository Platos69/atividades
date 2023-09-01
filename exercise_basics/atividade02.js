//Pagamento refente ao modelo de um carro

let modelo, preco_carro, taxa_inicial, parcela

modelo = prompt('Me diga o modelo do seu carro: ')
preco_carro = parseFloat(prompt('Me diga o valor do seu carro: '))

taxa_inicial = preco_carro/2 //a taxa é metade do preco do carro
parcela = (preco_carro/12).toFixed(2) //parcelado 12 vezes é igual a 12/preco_carro

console.log(`o seu carro modelo ${modelo}, tem a parcela inicial de ${taxa_inicial}R$ onde serão pago durante 12 meses parcelas de ${parcela}R$ cada.`)
        
    
