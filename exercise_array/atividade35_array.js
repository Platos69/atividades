let funcionariosalarioReceber,
  listaFormatada,
  funcionarioSalario = [],
  salarioMaior = 0,
  salarioMenor

do {
  funcionariosalarioReceber = parseFloat(
    prompt('Digite o valor do salario (15 funcionários)\nDigite "0" para sair : '),
  )
  funcionarioSalario.push(`${funcionariosalarioReceber}`)
} while (funcionariosalarioReceber != 0)
{
  if (funcionariosalarioReceber == 0) {
    confirm('Você saiu do programa!')
  }
}

funcionarioSalario.sort((a, b) => a - b)
salarioMaior = funcionarioSalario
salarioMenor = funcionarioSalario[0]
funcionarioSalario.pop()
funcionarioSalario.pop()
funcionarioSalario.shift()

listaFormatada = funcionarioSalario.join('<br>') //altera as virgula para <br>

document.write(
  `<h1>Lista de salário dos funcionarios:<br> ${listaFormatada}</h1><br><h2>Maior salário: ${salarioMaior}<br>Menor salário: ${salarioMenor}</h2>`,
)
