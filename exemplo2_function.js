// Função para converter minutos em horas e minutos
function converterParaHorasEMinutos(duracaoMinutos) {
    const horas = Math.floor(duracaoMinutos / 60);
    const minutos = duracaoMinutos % 60;
    return `${horas} hora(s) e ${minutos} minuto(s)`;
  }
  
  // Função principal que recebe o nome do filme e a duração em minutos
  function converterDuracaoFilme() {
    const nomeFilme = prompt('Digite o nome do filme:');
    const duracaoMinutos = parseInt(prompt('Digite a duração do filme em minutos:'));
  
    if (isNaN(duracaoMinutos) || duracaoMinutos <= 0) {
      alert('Por favor, digite um valor válido para a duração do filme.');
    } else {
      const duracaoFormatada = converterParaHorasEMinutos(duracaoMinutos);
      const mensagem = `O filme '${nomeFilme}' tem duração de ${duracaoFormatada}.`;
      alert(mensagem);
    }
  }
  
  // Chama a função para converter a duração do filme informado pelo usuário
  converterDuracaoFilme();
  