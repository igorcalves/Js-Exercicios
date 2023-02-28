let DiaUtil = function(dia) {
    if(dia === 1 || dia === 7){
        return 'não é um dia util'
    }else{
        switch(dia){
            case 1: return 'Domingo'
            case 2: return 'Segunda'
            case 3: return 'Terça-fera'
            case 4: return 'Quarta-Feira'
            case 5: return 'Quinta Feira'
            case 6: return 'Sexta-Feira'
            case 7: return 'Sabado'
            default: return 'digito invalido'   
        }
        
        
    }
}

console.log(DiaUtil(0))