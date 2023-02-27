let jogadas = [15,2,1,36,21,56,0,65,55,15,1,98]

function conferencia(arrayDeJogadas){
    let recorde = arrayDeJogadas[0]
    let recordepont = 0
    let menorValor = jogadas[0]
    let indiceMenorJogada = 0

    for(let i =0 ;i < jogadas.length;i++){
        if(arrayDeJogadas[i] > arrayDeJogadas[0] && recordepont <1){
            recorde = arrayDeJogadas[i]
            recordepont++
        }
        if(arrayDeJogadas[i]>recorde){
            recorde = arrayDeJogadas[i]
            recordepont++
        }
        if(arrayDeJogadas[i] < menorValor){
            menorValor = arrayDeJogadas[i]
            indiceMenorJogada = i
        }
    }

    return console.log(
`Recorde = ${recorde}
quantas vezes bateu o recorde ${recordepont}
a pontuação mais baixa foi ${menorValor}
e foi na posição ${indiceMenorJogada}`)
}

conferencia(jogadas)