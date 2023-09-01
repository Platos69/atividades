//Lados de um triangulo via validacao

let trianguloVerificar = parseInt(prompt('Quantos lados tem essa forma geometrica? '))
let trianguloA, trianguloB, trianguloC

if(isNaN(trianguloVerificar) || !Number.isInteger(trianguloVerificar) || trianguloVerificar !== 3){
    alert(`[ERROR] Valor inválido.`)
    location.reload()
} else {
    trianguloA = parseFloat(prompt('Digite o valor do lado esquerdo do triangulo: '))
    trianguloB = parseFloat(prompt('Digite o valor do lado direito do triangulo: '))
    trianguloC = parseFloat(prompt('Digite o valor da base do triangulo: '))

    if(!isNaN(trianguloA) || !isNaN(trianguloA) || !isNaN(trianguloA)){
        if(trianguloA > (trianguloB + trianguloC) || trianguloB > (trianguloA + trianguloC) || trianguloC > (trianguloA + trianguloB)){
            alert(`[ERROR] Não é possivel calcular.`)
            location.reload()
        } else {
            if(trianguloA === trianguloB && trianguloB === trianguloC){
                alert(`Seu triangulo é do tipo equilátero.`)
            } else if (trianguloA !== trianguloB || trianguloB !== trianguloC){
                alert(`Seu triangulo é do tipo isósceles.`)        
            } else {
                alert(`Seu triangulo é do tipo escaleno.`)
            }
        }
    } else {
        alert(`[ERROR] Valor inválido.`)
    }
    location.reload()
}
