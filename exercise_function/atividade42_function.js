function MaiorIdade(idadeReceber) {
    if(idadeReceber >= 18){
        return "Você é maior de idade"
    } else {
        return "Você é menor de idade"
    }
} 

idadeReceber = parseInt(prompt('Digite a sua idade: '))
alert(MaiorIdade(idadeReceber))