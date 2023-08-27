//Descricao de medicmaento e definição do valor do medicamento

let medicamento, valor_medicamento, desconto_medicamento

medicamento = prompt('Informe o nome do medicamento: ') 
valor_medicamento = parseFloat(prompt('Informe o valor do medicamento: '))

desconto_medicamento = (parseInt(valor_medicamento) + valor_medicamento).toFixed(2)//o inteiro do valor do medicamento somado ao valor com o decimal
valor_medicamento = (valor_medicamento).toFixed(2) //apenas para definir o limite de 2 decimais para o valor do medicamento

console.log(`O ${medicamento} está custando ${valor_medicamento}R$, porém na compra de 2 unidades o valor é igual a ${desconto_medicamento}R$.`)