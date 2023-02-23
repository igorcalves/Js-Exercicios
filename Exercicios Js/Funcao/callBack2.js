const notas = [4,5,3,2,4,3,4,6,7,8,9,8,7]

let notasbaixas = []

/*
for (let i = 0; i < notas.length; i++){
    if(notas[i] < 7) {
        
        notasbaixas.push(notas[i])
    }
}
*/ 
for (let i in notas){
    if (notas[i]<7) notasbaixas.push(notas[i])
}
 
console.log(notasbaixas)

notasbaixas = notas.filter(                                                                                                      nota=> nota < 7)
console.log(notasbaixas)