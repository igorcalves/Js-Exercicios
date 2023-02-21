const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10 :
        case 9:
            return 'Quadro de Honra'
        case 8: case 7:
            return 'Aprovado'
        case 6: case 5: case 4:
            return 'Recuperação'
        case 3:  case 2: case 1: case 0 :
            return 'Reprovado'
        default:
            return 'Nota Invalida'

    }
}

console.log(imprimirResultado(10))
console.log(imprimirResultado(5.5))
console.log(imprimirResultado(2.5))
console.log(imprimirResultado(-1))
