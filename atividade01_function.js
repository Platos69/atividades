//Nome e duração de um filme em função

function converterParaHorasEMinutos(duracaoMinutos) {
    const horas = parseInt(duracaoMinutos / 60).toFixed(2)
    const minutos = (duracaoMinutos % 60).toFixed(2)
    return (`${horas} hora(s) e ${minutos} minuto(s)`)
}
function NomeFilmeEDuracaoFilme() {
    const nomeFilme = prompt('Digite o nome do filme:')
    const duracaoMinutos = parseInt(prompt('Digite a duração do filme em minutos:'))
  
if (isNaN(duracaoMinutos) || duracaoMinutos <= 0) {
      alert('Por favor, digite um valor válido para a duração do filme.')
    } else {
      const duracaoFormatada = converterParaHorasEMinutos(duracaoMinutos)
      const mensagem = (`O filme '${nomeFilme}' tem duração de ${duracaoFormatada}.`)
      document.writed(mensagem)
    }
}
  
// Chama a função para converter a duração do filme informado pelo usuário
NomeFilmeEDuracaoFilme()
  