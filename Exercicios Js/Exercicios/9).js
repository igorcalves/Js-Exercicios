function aluno(nota){
    let novaNota = nota;
    let dif = 0
    if(nota >0 && nota <= 100){
        while(!(novaNota %5===0)){
            novaNota++
        }
        dif = novaNota - nota
        if(dif <=3){
            nota = novaNota
        }
        if(nota <40) return console.log('Reprovado')

    }else return console.log('nota Invalida')
    return console.log(nota)
}

aluno(36)