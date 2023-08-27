//Saques com validacao

let numeroReceber = Number(prompt('Digite o valor que deseja receber: '))

let cedula10, cedula50, cedula100

if (numeroReceber % 100 == 0 || numeroReceber % 50 == 0 || numeroReceber % 10 == 0) {
  cedula100 = Math.floor(numeroReceber / 100)
  cedula50 = Math.floor((numeroReceber % 100) / 50)
  cedula10 = Math.floor((numeroReceber % 50) / 10)

  alert(`O valor de saque R$${numeroReceber} é:\n\nCedulas de R$100: ${cedula100}\nCedulas de R$50: ${cedula50}\nCedulas de R$10: ${cedula10}`)
} else {
  alert(`Não foi possivel te entregar o valor do saque.`)
}
