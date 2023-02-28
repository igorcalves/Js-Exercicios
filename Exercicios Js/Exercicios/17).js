let aumento = function(salario,plano){
    
    switch(plano){
        case 'A': return salario *=1.10
        case 'B': return salario *=1.15
        case 'C': return salario *=1.20
        default: 'plano invalido'
    }

}
console.log(aumento(100,'C').toFixed(2))