function gerarNumeroAleatorio(maximoReceber, minimoReceber){
    return  Math.floor(Math.random() * (maximoReceber - minimoReceber + 1)) + minimoReceber
}

maximoReceber = Number(prompt('Digite o valor máximo da aleatoriedade: '))
minimoReceber = Number(prompt('Digite o valor minimo da aleatoriedade: '))

do{
console.log(gerarNumeroAleatorio(maximoReceber, minimoReceber))
}while(confirm(`Deseja continuar? `));