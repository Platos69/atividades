let produto,
  produtos = [],
  listaFormatada

do {
  produto = prompt('Digite o valor que deseja(0 para sair): ')
  produtos.push(produto) //exporta o que foi colocar para o produtos[]
} while (produto != '0')

produtos.pop() //faz com que o ultimo caracter seja removido
listaFormatada = produtos.join('<br>') //altera as virgula para <br>

document.write(listaFormatada)
