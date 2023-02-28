function cardapio(codigo){

    switch (codigo){
        case 100: return 'Cachorro Quente preço = ' + 'R$: ' + 3.00
        case 200: return 'Hambúrguer Simples preço = ' + 'R$: ' + 4.00
        case 300: return 'CheeseBurguer preço = ' + 'R$: ' + 5.50
        case 400: return 'Bauru preço = ' + 'R$: ' + 7.50
        case 500: return 'Refrigerante preço = ' + 'R$: ' + 3.50
        case 600: return 'Sucu preço = ' + 'R$: ' + 3.00
        default: return 'codigo invalido'

    }

}

console.log(cardapio(4002))