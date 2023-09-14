let n = [], mediaFinal

for (let i = 0; i <= 2; i++) {
    do {
        n[i] = parseFloat(prompt(`Digite o valor da ${i + 1}º nota: `))
    } while (!ValidarNota(n[i]))
}

let mediaEscolha = prompt(`Escolha a maneira que a média sera apresentada!\nP - Media Ponderada\nA - Media Aritmética\nFaça a sua escolha: `).toLowerCase()

while(mediaEscolha != 'p' && mediaEscolha != 'a'){
alert('Opção inválida! Digite uma opção válida')
mediaEscolha = prompt(`Escolha a maneira que a média sera apresentada!\nP - Media Ponderada\nA - Media Aritmética\nFaça a sua escolha: `).toLowerCase()
}
switch (mediaEscolha) {
    case 'p':
        mediaFinal = ((n[0] * 5) + (n[1] * 3) + (n[2] * 2)) / (5 + 3 + 2)
        document.write(mediaFinal)
        break
    case 'a':
        mediaFinal = (n[0] + n[1] + n[2]) / n.length
        document.write(mediaFinal)
        break
}

function ValidarNota(nota) {
    if (nota > 10 || nota < 0 || isNaN(nota)) {
        alert('Nota inválida!')
        return false
    }
    return true
}