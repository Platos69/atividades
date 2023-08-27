let nome, anoNascimento, anoAtual, idade

nome = prompt('Digite seu nome: ')
anoNascimento = prompt('Digite o seu ano de nascimento: ')
anoAtual = prompt('Digite o ano atual: ')

anoNascimento = parseInt(anoNascimento)
anoAtual = parseInt(anoAtual)

idade = anoAtual - anoNascimento

console.log(`Olá ${nome}, sua idade é igual a ${idade} anos.`)

