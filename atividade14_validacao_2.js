let numeroReceber = parseInt(prompt('Digite o número: '))

if(isNaN(numeroReceber)){
    alert(`[ERROR] Valor inválido.`)
    location.reload()
} else {
    if(numeroReceber % 2 != 0){
        alert(`O número ${numeroReceber} é impar.`)
    } else {
        alert(`O número ${numeroReceber} é par.`)
    }
}

