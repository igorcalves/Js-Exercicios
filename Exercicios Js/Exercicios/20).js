function primeiroValor(valor){
    let primeiroDigito =  Math.floor(valor / Math.pow(10, Math.floor(Math.log10(valor))));

    valor = primeiroDigito
    
    let i =0
    let notas = 0 
    if(valor<10){
        if(valor == 5) return '1 nota de 50 reais'

        if(valor < 5){
            while(i !== valor){
                i++
                notas ++
            }
            return notas + ' notas de 10 reais'
        }else{
            i = 5
            while(i < valor){
                i++
                notas ++
            }
            return '1 nota de 50 e ' +  (notas)  + ' notas de 10 real'
        }


}
}


function trocoSegundoDigito(valor){
    let segundoDigito = valor.toString()[1]
    valor = segundoDigito
    
    let i =5
    let notas =0
    
    if(valor<10){
        i =0
        if(valor == 5) return '1 nota de 5 reais'
        if(valor < 5){
            while(i !== valor){
                i++
                notas ++
                
            }
            return notas + ' notas de 1 real'
        }else{
            i = 5
            while(i < valor){
                i++
                notas ++
            }
            return '1 nota de 5 e ' +  (notas)  + ' nota(s) de 1 real'
        }

    }

}
let num = 98

console.log(` para trocar ${num} é preciso de
${primeiroValor(num)} ${trocoSegundoDigito(num)}`)
