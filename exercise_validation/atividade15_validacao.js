//Velocimentro com validacao

const velocidadePermitida = parseFloat(prompt('Digite a velocidade permitida:'))
let velocidadeCondutor = parseFloat(prompt('Digite a velocidade do condutor: '))
let multaValor = 1.2 

if (!isNaN(velocidadeCondutor) && velocidadeCondutor > 0) {
  if (velocidadeCondutor > velocidadePermitida){
      alert(`Multa aplicada por excesso de velocidade!\nVelocidade registrada: ${velocidadeCondutor.toFixed(3)}Km/h`)
    }
    if (velocidadeCondutor > velocidadePermitida && velocidadeCondutor <= (velocidadePermitida * 1.2)){
      multaValor = multaValor * velocidadeCondutor
      alert(`A multa será leve!\nO valor será de R$${multaValor.toFixed(2)}`)
    } else if (velocidadeCondutor > (velocidadePermitida * 1.2)){
      multaValor = (multaValor + 0.8) * velocidadeCondutor
      alert(`A multa será grave!\nO valor será de R$${multaValor.toFixed(2)}`)
    }
    else {
    alert(`Velocidade permitida!\nVelocidade registrada: ${velocidadeCondutor.toFixed(3)}`)
  }
} else {
  alert('Valor digitado inválido')
}
