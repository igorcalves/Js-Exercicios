function cedulas(valor){
    let segundoDigito = valor.toString()[1]
    let i =5
    let notas =0
    if(valor == 10) return '1 Nota de 10 reais'
    if(valor<10){
        i =0
        if(valor == 5) return '1 nota de 5 reais'
        if(valor < 5){
            while(i !== valor){
                i++
                notas ++
            }
            console.log(notas + ' notas de 1 real')
        }else{
            while(i < valor){
                i++
                notas ++
            }
            return '1 nota de 5 e ' +  (notas)  + ' notas de 1 real'
        }

    }

}

cedulas(3)