let instagramArroba, instagramSeguidores, produtoDescricao, produtoValor, postagemLogic, postagem, porcentagem

instagramArroba = prompt(`Digite o seu arroba: `)
instagramSeguidores = parseInt(prompt(`Digite quantos seguidores você possui: `))
produtoDescricao = prompt(`Digite qual o produto: `)
produtoValor = parseFloat(prompt(`Digite qual o valor do produto: `))
postagemLogic = prompt(`Escolha se postará o conteúdo:\nS - Sim\nN - Não\nDigite a sua escolha:`).toLowerCase

while(postagemLogic == 's' && postagemLogic == 'n'){
    alert(`[ERROR]Digite uma opção válida`)
    postagemLogic = prompt(`Escolha se postará o conteúdo: `).toLowerCase
}

switch(postagemLogic) {
    case 's':
        postagem = 1
        break
    case 'n':
        postagem = 0
    break
}

function DescontoSeguidores(){
    if(instagramSeguidores == 5000){
        porcentagem = 5 
    } else if(instagramSeguidores > 5000 && instagramSeguidores <= 20000){
        porcentagem = 10
    } else if(instagramSeguidores > 20000 && instagramSeguidores <= 50000){
        porcentagem = 15
    } else if(instagramSeguidores > 50000 && instagramSeguidores >= 100000){
        porcentagem = 25
    } else {
        document.write(`Olá @${instagramArroba}, você possui apenas ${instagramSeguidores} e por isso o produto ${produtoDescricao} continuará com R$${produtoValor.toFixed(2)}`)
    }

    if(instagramSeguidores >= 20000 && postagem == 1){
        porcentagem += 5
    }

    produtoValor =  produtoValor - (produtoValor * (porcentagem / 100))
    document.write(`Parabéns @${instagramArroba}, você possui ${instagramSeguidores} e por isso o produto ${produtoDescricao} ficará como R$${produtoValor.toFixed(2)}`)
}

DescontoSeguidores()