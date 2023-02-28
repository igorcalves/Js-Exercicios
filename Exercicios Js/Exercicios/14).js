const feira = function(fruta){
    switch(fruta){
        case'kiwi': return 'Estamos em escassez de kiwis'
        case'melancia': return 'aqui é 3 reais o kg'
        case'maça': return 'Não vendemos essa fruta aqui'

        default:return 'erro no console'
    }

}

console.log(feira('1'))