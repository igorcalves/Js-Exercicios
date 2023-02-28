let escolha = function(carro){

    switch(carro){
        case 'hatch': return 'Compra Efetuada com Sucesso'
        case 'sedans','motocicletas','caminhonetes': return 'Tem Certeza que não prefere outro modelo ?'
        default: return 'modelo não encontrado'
    }
}

console.log(escolha('hatsch'))