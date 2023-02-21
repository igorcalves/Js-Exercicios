function getIntRandom(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getIntRandom(-1,10)
    console.log(`itens foi ${opcao}.`)
}while(opcao != -1)