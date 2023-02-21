Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this<= fim
}

const imprimirResultado = function (nota){
    if (nota.entre(9,10)){
        return 'Quadro de honra'
    }else if (nota.entre (7,8.99)){
        return 'Aprovado'
    }else if (nota.entre(4,6.99)){
        return 'Receuperação'
    }else if (nota.entre(0,3.99)){
        return 'reprovado'
    }else{
        return 'Nota Invalida'
    }
}

console.log(imprimirResultado(10))
console.log(imprimirResultado(-1))
console.log(imprimirResultado(2))
console.log(imprimirResultado(5))
