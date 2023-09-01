let valorReceber = parseInt(
  prompt("Digite um número para saber os número pares entre ele: ")
)

for (i = 1; i <= valorReceber; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}
