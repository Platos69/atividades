//Media aritmetica com condicional

const nota1 = Number(prompt('Digite a primeira nota (1 à 10): '))
const nota2 = Number(prompt('Digite a segunda nota (1 à 10): '))
const nota3 = Number(prompt('Digite a terceira nota (1 à 10): '))
const nota4 = Number(prompt('Digite a quarta nota (1 à 10): '))
const notaLista = [nota1, nota2, nota3, nota4]

const mediaAritimetica = (nota1 + nota2 + nota3 + nota4) / 4

if(notaLista === 0 || isNaN(notaLista)){
    alert('Digite um valor maior que 10')
    location.reload()
}

if(mediaAritimetica >= 7){
    alert(`Você passou com uma média de: ${mediaAritimetica.toFixed(2)}`)
}else if(mediaAritimetica < 7){
    alert(`Você reprovou com uma média de: ${mediaAritimetica.toFixed(2)}`)
}else(mediaAritimetica < 1 || mediaAritimetica > 10)
    alert('Você digitou um código inválido')