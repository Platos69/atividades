//Numero mair ou menor com condicional

const primeiroNumero = Number(prompt('Digite o primeiro número: '))
const segundoNumero = Number(prompt('Digite o segundo número: '))

if(primeiroNumero > segundoNumero){
    alert(`${primeiroNumero} é maior que ${segundoNumero}`)
}else if(primeiroNumero < segundoNumero){
    alert(`${segundoNumero} é maior que ${primeiroNumero}`)
}else if(primeiroNumero === segundoNumero){
    alert(`${segundoNumero} é igual À ${primeiroNumero}`)
}else{
    alert(`Não é possível detectar um número maior`)
}