function soma(){
    let soma = 0 
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1,2,3,4,56,7,89))
console.log(soma('a','b', 1 ,2))