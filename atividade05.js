//Valor pelo tempo usado de um computador

const tempo = 15
let valor_tempo, tempo_usado, valor_por_min, valor_final

valor_tempo = parseFloat(prompt('Informe o valor de 15 minutos de uso: '))
tempo_usado = parseInt(prompt('Informe o tempo que o computador foi usado (em minutos):'))

valor_por_min = (valor_tempo / tempo) //o tenpo de 1 minuto
valor_final = parseFloat(valor_por_min * tempo_usado).toFixed(2)//tempo que foi usado vezes o valor por minuto

console.log(`O computador foi usado por ${tempo_usado} minutos, o que dá ${valor_final}R$`)