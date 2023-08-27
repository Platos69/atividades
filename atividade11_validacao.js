//Horario com validacao
let horarioReceber

do{
     horarioReceber = Number(prompt('Digite a hora atual e os minutos: '))
    }while(horarioReceber < 0 || horarioReceber > 24 || isNaN(horarioReceber))

let minutosCalculo = (horarioReceber - parseInt(horarioReceber)) * 60
minutosCalculo = parseInt(minutosCalculo)

if(minutosCalculo <= 9)
    minutosCalculo = (`0${minutosCalculo}`)

if(horarioReceber >= 19){
    horarioReceber = parseInt(horarioReceber + 5) - 24
    alert(`O horário atual na França ${horarioReceber}:${minutosCalculo}`)
} else if(horarioReceber <= 9){
    horarioReceber = parseInt(horarioReceber) + 5
    alert(`O horário atual na França 0${horarioReceber}:${minutosCalculo}`)
}else{
    horarioReceber = parseInt(horarioReceber) + 5
    alert(`O horário atual na França ${horarioReceber}:${minutosCalculo}`)
}