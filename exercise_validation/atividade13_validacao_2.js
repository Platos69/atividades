//Saques com validacao v2

let numeroReceber = Number(prompt('Digite o valor que deseja receber: '))

let moeda1, cedula5, cedula10, cedula20, cedula50, cedula100, cedula200

if ((numeroReceber % 200) >= 1) {
  cedula200 = Math.floor(numeroReceber / 200)
  cedula100 = Math.floor((numeroReceber % 200) / 100)
  cedula50 = Math.floor((numeroReceber % 100) / 50)
  cedula20 = Math.floor((numeroReceber % 50) / 20)
  cedula10 = Math.floor((numeroReceber % 20) / 10)
  cedula5 = Math.floor((numeroReceber % 10) / 5)
  moeda1 = Math.floor((numeroReceber % 5) / 1)

  alert(`O valor de saque R$${numeroReceber} é:\n\nCedulas de R$200: ${cedula200}\nCedulas de R$100: ${cedula100}\nCedulas de R$50: ${cedula50}\nCedulas de R$20: ${cedula20}\nCedulas de R$10: ${cedula10}\nCedulas de R$5: ${cedula5}\nMoedas de R$1: ${moeda1}\n`)
}