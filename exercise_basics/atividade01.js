//Nome e duração de um filme

let nome_filme, tempo_filme, hora, min

nome_filme = prompt('Me diga o nome do filme:')
tempo_filme = parseFloat(prompt('Me diga a duração desse filme em minutos:'))

hora = parseInt(tempo_filme/60)//resultado do quociente que são as horas
min = tempo_filme%60//resultado do resto que é os minutos

console.log(`O filme ${nome_filme} tem ${hora} horas e ${min} minutos`)
