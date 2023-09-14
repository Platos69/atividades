let nomesFuncionarios = [], salariosFuncionarios = [], tempoServicoFuncionarios = [], contador = 5

for (let i = 0; i < contador; i++) {
    nomesFuncionarios.push(prompt(`Digite o nome do ${i + 1}º funcionário:`))
    salariosFuncionarios.push(parseFloat(prompt(`Digite o salário do ${i + 1}º funcionário:`)))
    tempoServicoFuncionarios.push(parseInt(prompt(`Digite o tempo de serviço (em anos) do ${i + 1}º funcionário:`)))
}

function CalcularAumentosERelatorios() {
    document.write("<h1>Funcionários sem aumento:</h1>")
    for (let i = 0; i < contador; i++) {
        if (tempoServicoFuncionarios[i] > 5 || salariosFuncionarios[i] < 400) {
            continue
        }
        document.write(`Nome: ${nomesFuncionarios[i]}<br>`)
    }

    document.write("<h1>Funcionários com aumento:</h1>")
    for (let i = 0; i < contador; i++) {
        let aumento = 0
        if (tempoServicoFuncionarios[i] > 5 && salariosFuncionarios[i] < 400) {
            aumento += salariosFuncionarios[i] * 1.35
        }
        if (tempoServicoFuncionarios[i] > 5) {
            aumento += salariosFuncionarios[i] * 1.25
        }
        if (salariosFuncionarios[i] < 400) {
            aumento += salariosFuncionarios[i] * 1.15
        }
        if (aumento > 0) {
            salariosFuncionarios[i] += aumento
            document.write(`Nome: ${nomesFuncionarios[i]}, Novo Salário: R$ ${salariosFuncionarios[i].toFixed(2)}<br>`)
        }
    }
}

CalcularAumentosERelatorios()