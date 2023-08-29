let Voto1 = 0,
  Voto2 = 0,
  Voto3 = 0,
  Voto4 = 0,
  VotoBranco = 0,
  votoReceber

do {
  votoReceber = parseInt(
    prompt(
      'Digite a sua escolha:\n\n1 - Lobão\n2 - Gênio\n3 - Skibidipi\n4 - Balsonaru\n5 - Voto branco\n6 - Voto nulo\n\nDigite a sua escolha: ',
    ),
  )
  switch (votoReceber) {
    case 0:
      break
    case 1:
      Voto1++
      continue
    case 2:
      Voto2++
      continue
    case 3:
      Voto3++
      continue
    case 4:
      Voto1++
      continue
    case 5:
      alert('Seu voto foi considerado e será computado nas estatísticas!')
      VotoBranco++
      continue
    case 6:
      alert('Seu voto não foi considerado e não sera computado nas estatísticas!')
      continue

    default:
      alert('Valor inválido!')
      continue
  }
} while (votoReceber !== 0)

document.write(
  `O candidato 1 teve ${Voto1}<br>O candidato 2 teve ${Voto2}<br>O candidato 3 teve ${Voto3}<br>O candidato 4 teve ${Voto4}<br><br>Votos em branco ${VotoBranco}`,
)
