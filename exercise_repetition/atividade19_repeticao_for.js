let sequenciaReceber = parseInt(
  prompt("Digite apartir de qual número deseja começar: ")
)

if (isNaN(sequenciaReceber) || !Number.isInteger(sequenciaReceber)) {
  alert("[ERROR] Valor inválido")
} else {
  for (i = sequenciaReceber; i >= 1; i--) {
    console.log(i)
  }
}
