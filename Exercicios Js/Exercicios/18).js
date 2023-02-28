function numeros(numero){

    switch(numero){
        case 1: return 'Um'
        case 2: return 'Dois'
        case 3: return 'Tres'
        case 4: return 'Quatro'
        case 5: return 'Cinco'
        case 6: return 'Seis'
        case 7: return 'Sete'
        case 8: return 'Oito'
        case 9: return 'Nove'
        case 10: return 'Dez'
    }

    
}

console.log(numeros(3))

for(let i = 1; i <= 10;i++){
    console.log(numeros(i))
}