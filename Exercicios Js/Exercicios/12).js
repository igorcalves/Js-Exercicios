function fatorial(numero){
    let resultado = numero *(numero -1)
    numero -= 2
    
    while(numero>0){
        resultado *= numero
        numero--
    }
    console.log(resultado)
}

fatorial(105)