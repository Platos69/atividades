//Valor à ser pago pelo kilo

let valor_kg, consumido_g, valor_final, valor_kg_final

valor_kg = parseFloat(prompt('Me diga o valor por kg: '))
consumido_g = Number(prompt('Informe a quantidade consumida em gramas: '))

valor_final = consumido_g * (valor_kg / 1000) // 1000 gramas é igual a 1kg
valor_kg_final = consumido_g / 1000 //a quantia em gramas consumida por 1000, para haver equivalencia

console.log(`O cliente consumiu ${valor_kg_final}Kgs, o que ficou ${valor_final}R$.`)


