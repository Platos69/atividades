//IMC com condicional

const sexo = prompt('Informe seu sexo!\nM - para mulher\nH - Homem\nDigite o seu sexo: ')
const alturaValor = parseFloat(prompt('Digite sua altura: '))

let pesoIdeal = 0

if(sexo === 'M' && sexo !== 'H'){
    pesoIdeal = 21 * (Math.pow(alturaValor, 2))
    alert(`Seu peso ideal é igual á: ${pesoIdeal.toFixed(1)}Kgs `)
}else if(sexo === 'H' && sexo !== 'M'){
    pesoIdeal = 22 * (Math.pow(alturaValor, 2))
    alert(`Seu peso ideal é igual á: ${pesoIdeal.toFixed(1)}Kgs `) 
}else{
    alert('Genêro inválido.')
}
