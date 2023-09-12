n = []

function CalcularMedia(n1 = n[0], n2 = n[1], n3 = n[2]) {
    return (n1 + n2 + n3) /3
} 

for(let i = 0; i <= 2; i++){
    n[i] = Number(prompt(`Digite o valor do ${i + 1}º número: `))
}

console.log(CalcularMedia(n1 = n[0], n2 = n[1], n3 = n[2]))

