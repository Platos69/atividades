//Calculadora com repeticao

let numeroReceber = parseInt(prompt('Digite o valor para saber a tabuada: '))
let resultadoTotal

if(!isNaN(numeroReceber) || !Number.isInteger(numeroReceber)){
    for(let i = 1; i <= 10; i++){
        resultadoTotal = numeroReceber * i 
        console.log(`${numeroReceber} x ${i} = ${resultadoTotal}`)
    }
} else {
    alert('[ERROR] Valor inválido.')
    location.reload()
}
