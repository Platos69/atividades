let aleatoriedadeLimite = parseInt(prompt('Digite a quantia de números a serem gerados: '))

function gerarNumeroAleatorio(maximoReceber, minimoReceber){
    return  Math.floor(Math.random() * (maximoReceber - minimoReceber + 1)) + minimoReceber
}

minimoReceber = Number(prompt('Digite o valor minimo da aleatoriedade: '))
maximoReceber = Number(prompt('Digite o valor máximo da aleatoriedade: '))

for(let i = 1; i <= aleatoriedadeLimite; i++){
    console.log(gerarNumeroAleatorio(maximoReceber, minimoReceber))
    if(i >= 10000){
        alert(`[MEDIDA DE SEGURANÇA] Este programa tem um limite de ${i} sequências`)
        break
    }
}

