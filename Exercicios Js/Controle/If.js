function soBoaNoticia(nota){
    if(nota>=7){
        return 'parabens'
    }else{
        return 'reprovado'
    }

}

console.log(soBoaNoticia(7))

function seForVerdade(valor){
    if(valor){
        return 'É Verdade...'
    }
}

console.log(seForVerdade())